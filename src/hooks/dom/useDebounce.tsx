type Timer = ReturnType<typeof setTimeout>;

function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: Timer | null;

  return function debouncedFn(...args: Parameters<T>) {
    clearTimeout(timer!);

    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export default debounce;
