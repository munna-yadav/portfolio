
export default function Assets() {
  return (
    <div className="flex flex-col items-center justify-center">
      <iframe
        src="/assets/resume.pdf"
        title="Resume PDF"
        width="100%"
        height="700px"
        className="border rounded-md shadow-md bg-white dark:bg-zinc-900"
      />
    </div>
  )
}
