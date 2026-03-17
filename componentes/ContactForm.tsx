"use client"

import { useActionState } from "react"
import { sendContactForm } from "@/app/actions/contact"

export default function ContactForm() {
  const [state, action, isPending] = useActionState(sendContactForm, null)

  return (
    <form action={action} className="flex flex-col gap-4 max-w-md mx-auto">
      <input name="name" placeholder="Nombre" required className="border p-2 rounded" />
      <input name="email" type="email" placeholder="Email" required className="border p-2 rounded" />
      <input name="subject" placeholder="Asunto" required className="border p-2 rounded" />
      <textarea name="message" placeholder="Mensaje" required className="border p-2 rounded h-32" />

      {state?.error && <p className="text-red-500">{state.error}</p>}
      {state?.success && <p className="text-green-500">¡Mensaje enviado!</p>}

      <button type="submit" disabled={isPending} className="bg-black text-white p-2 rounded">
        {isPending ? "Enviando..." : "Enviar"}
      </button>
    </form>
  )
}