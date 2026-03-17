"use server"

export async function sendContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  if (!name || !email || !subject || !message) {
    return { success: false, error: "Todos los campos son obligatorios." }
  }

  // Aquí puedes conectar un servicio de email (Resend, Nodemailer, etc.)
  console.log({ name, email, subject, message })

  return { success: true, error: null }
}