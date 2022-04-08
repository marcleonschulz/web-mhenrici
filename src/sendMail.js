import { renderMail } from 'svelte-mail';
import Mail from './components/Mail.svelte';
 
async function sendMail() {
  const { html, text } = await renderMail(Mail, { data: { user: 'World' } });
 
  /*
    `html` contains the rendered html string:
    "<strong style="color: red">Hello, World</strong>"
 
    `text` contains the rendered plain text message:
    "Hello, World"
  */
 
  // TODO: Send mail, e.g. using nodemailer...
}