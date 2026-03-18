// This dynamic route is unused - static routes /videos/male and /videos/female
// take precedence. Required by Next.js static export: generateStaticParams must exist.
export function generateStaticParams() {
  return []
}

export default function GenderPage() {
  return null
}
