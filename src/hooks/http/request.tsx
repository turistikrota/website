import { Dispatch, useCallback, useState } from 'react'
import { Method } from '~/hooks/http/http-enum'

type CreateHttpRequestParams<B = never> = {
  url: string
  method: Method
  body?: B
  headers?: Record<string, string>
  token?: string
}

type UseRequestHookOptions = {
  headers?: Record<string, string>
}

type CreateRequestHookResult<Result = never, Body = never> = [
  boolean,
  (dispatch?: Dispatch<Result>, errDispatch?: Dispatch<Error | null> | null, dispatchBody?: Body) => Promise<Result>,
  Error | null,
]

const useHttpRequest = <Body, Result>({
  url,
  body,
  method,
  headers,
  token,
}: CreateHttpRequestParams<Body>): CreateRequestHookResult<Result, Body> => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const request = useCallback(
    async (dispatch?: Dispatch<Result>, errDispatch?: Dispatch<Error | null> | null, dispatchBody?: Body) => {
      setLoading(true)
      setError(null)

      const _body = dispatchBody ? dispatchBody : body

      try {
        const reqHeaders: HeadersInit = {
          'Content-Type': 'application/json',
          ...headers,
        }

        if (token) {
          reqHeaders.Authorization = token
        }

        const response = await fetch(url, {
          method,
          headers: reqHeaders,
          body: _body ? JSON.stringify(_body) : undefined,
        })

        const data = await response.json()
        setLoading(false)

        if (response.status >= 400) {
          setError(data)
          if (dispatch) dispatch(data)
          if (errDispatch) errDispatch(null)
          return data
        }

        if (dispatch) dispatch(data)
        if (errDispatch) errDispatch(null)
        return data
      } catch (e: unknown) {
        const err = e as Error
        setLoading(false)
        setError(err)
        if (errDispatch) errDispatch(err)
        return err
      }
    },
    [url, method, token, headers, body],
  )

  return [loading, request, error]
}

const useGet = <Result,>(url: string, options?: UseRequestHookOptions): CreateRequestHookResult<Result> => {
  return useHttpRequest<never, Result>({
    url: url,
    method: Method.GET,
    token: options?.headers?.Authorization,
    body: undefined,
    headers: options?.headers,
  })
}

const usePost = <Body, Result>(
  url: string,
  body?: Body,
  options?: UseRequestHookOptions,
): CreateRequestHookResult<Result, Body> => {
  return useHttpRequest<Body, Result>({
    url: url,
    method: Method.POST,
    body,
    headers: options?.headers,
    token: options?.headers?.Authorization,
  })
}

const usePut = <Body, Result>(
  url: string,
  body?: Body,
  options?: UseRequestHookOptions,
): CreateRequestHookResult<Result> => {
  return useHttpRequest({
    url: url,
    method: Method.PUT,
    body,
    token: options?.headers?.Authorization,
    headers: options?.headers,
  })
}

const useDelete = <Result,>(url: string, options?: UseRequestHookOptions): CreateRequestHookResult<Result> => {
  return useHttpRequest<never, Result>({
    url: url,
    method: Method.DELETE,
    body: undefined,
    headers: options?.headers,
    token: options?.headers?.Authorization,
  })
}

export { useDelete, useGet, usePost, usePut }
