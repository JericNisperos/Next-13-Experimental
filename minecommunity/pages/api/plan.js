// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req = {}, res = {}) {
  const response = await fetch(`${process.env.PLAN_API}`);
  const data = await response?.json();

  res.json(data);
}
