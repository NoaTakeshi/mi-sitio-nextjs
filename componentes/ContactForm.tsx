"use client"

import { useActionState } from "react"
import { sendContactForm } from "@/app/actions/contact"

export default function ContactForm() {
  const [state, action, isPending] = useActionState(sendContactForm, null)

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-md mx-auto">
        
        <h2 className="text-3xl font-bold text-center mb-2">Contacto</h2>
        <p className="text-gray-500 text-center mb-8">
          ¿Tienes alguna pregunta? Escríbenos.
        </p>

        <form action={action} className="flex flex-col gap-4">
          <input
            name="name"
            placeholder="Nombre"
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            name="subject"
            placeholder="Asunto"
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            required
            className="border border-gray-300 p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
          {state?.success && <p className="text-green-500 text-sm">¡Mensaje enviado!</p>}

          <button
            type="submit"
            disabled={isPending}
            className="bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            {isPending ? "Enviando..." : "Enviar"}
          </button>
        </form>

      </div>
    </section>
  )
}