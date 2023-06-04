export async function POST(request: Request) {
  const body = await request.json();
  console.log("body::", body);
  return new Response(JSON.stringify({ message: "Hello world" }), {
    headers: { "content-type": "application/json" },
  });
}
