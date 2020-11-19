export default function nl2br(s) {
  if (typeof s !== "string") {
    s = s.toString();
  }

  return s.replace(/\r\n/g, "<br />").replace(/\n|\r/g, "<br />");
}
