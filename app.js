 const nodemailer = require("nodemailer")
 const {google} = require("googleapis")

 const  CLIENT_ID=""
 const CLIENT_SECRET=""
 const REDIRECT_URI=""
 const REFRESH_TOKEN=
    ""

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)

    oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

     async function sendMail(){
        try{
            const accessToken = await oAuth2Client.getAccessToken();
            const transport = nodemailer.createTransport({
                service:'gmail',
                auth:{
                    type: 'Oauth2',
                    user: '0508debjitkundu2005@gmail.com',
                    clientId:CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken
                }
            })

            const mailOptions={
                from:' DEBJIT KUNDU <0508debjitkundu2005@gmail.com>',
                to: 'debarghya1470@gmail.com',
                subject: "hello from gmail using API",
                text: " Say sorry for no reason or else i will not stop this program to bomb emails ",
                html: '<h1> Say sorry for no reason or else i will not stop this program to bomb emails</h1>'
            };

            const result = await transport.sendMail(mailOptions)
            console.log(result)
            return result


        }catch(error){
            return error;
        }
    }

   /*  sendMail().then(result=> console.log('Email is sent......', result ))
    .catch(error=> console.log(error))
 */
    setInterval(sendMail, 1)