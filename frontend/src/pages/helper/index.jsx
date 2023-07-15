import { useChat } from "ai/react"

// Optional but recommended: use the Edge Runtime. This can only be done at the page level, not inside nested components.
export const runtime = "experimental-edge"

export default function Page() {
  const { messages, handleSubmit, input, handleInputChange } = useChat({
    api: "/api/gpt",
  })

  return (
    <>
      <p className="">
        {messages.map((message, i) => (
          <div key={i} className="py-4">
            {message.content.split("\n").map((m) => (
              <p>{m}</p>
            ))}
          </div>
        ))}
      </p>
      <form
        onSubmit={handleSubmit}
        className="absolute bottom-2 p-2 left-1/2 -translate-x-1/2"
      >
        <label htmlFor="input">Prompt</label>
        <div className="flex gap-2">
          <input
            name="prompt"
            value={input}
            onChange={handleInputChange}
            id="input"
            autoComplete="off"
            className="bg-zinc-100 rounded-2xl border-2 px-8 p-4 w-[91vh]"
          />
          <button
            type="submit"
            className="h-full bg-indigo-500 rounded text-white p-4"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  )
}