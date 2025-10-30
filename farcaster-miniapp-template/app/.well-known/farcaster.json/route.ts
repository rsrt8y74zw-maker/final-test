export async function GET() {
  return Response.json({
    accountAssociation: {
      "header": "ton_header",
      "payload": "ton_payload",
      "signature": "ta_signature"
    },
  });
}
