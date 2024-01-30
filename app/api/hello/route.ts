// Here is a simeple hello router that can be accessible same as app router.
// Router for this api is /api/hello
// Custom routes can be created by using app router approach and handler file name should be route.ts.
import { NextResponse } from 'next/server';

export const GET = () => {
  // you can also catch the request by adding this "req: NextApiRequest" in funtion params.
  // Function name should be GET, PUT, POST so on according to Http method that you want to handle.
  const res = NextResponse;
  return res.json({ message: 'Hello from Next.js!' });
};

export default GET;
