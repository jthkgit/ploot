const SibApiV3Sdk = require('sib-api-v3-sdk')
const defaultClient = SibApiV3Sdk.ApiClient.instance

// Configure API key authorization: api-key
const apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = process.env.BREVO_API_KEY

const fnAPI = (req, res) => {
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
  const body = JSON.parse(req.body)

  const sendSmtpEmail = {
    to: [
      {
        email: body.Email,
      },
    ],
    templateId: 2,
  }

  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      if (data) {
        res.status(200).json({ status: 'success', message: 'Thank you for subscribing!' })
      }
    },
    function (error) {
      console.error(error)
      res.status(500).json({
        status: 'error',
        message: 'Oops! Something went wrong. Please try again',
        error: error,
      })
    }
  )
}

export default fnAPI
