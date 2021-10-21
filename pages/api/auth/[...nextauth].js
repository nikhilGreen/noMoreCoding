import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: "da5861619005a62dc2df",
      clientSecret: "470622a970f65ec58b160b38609fb17ca7bd9bd6",
    }),
    Providers.Google({
      clientId: "495021028869-om64avddihj9ag45nmva9g4l9bahsdj5.apps.googleusercontent.com",
      clientSecret: "pUqCtV9TkUGIDqGd4_igHcqF",
    }),
    // Providers.Twitter({
    //   clientId: process.env.TWITTER_ID,
    //   clientSecret: process.env.TWITTER_SECRET,
    // }),
    Providers.Facebook({
      clientId: "580470253323211",
      clientSecret: "b1da1de90457481a04a68ba36eb51c80",
    }),
    // Providers.Email({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    // }),
  ],
  // pages: {
  //   signIn: "/",
  // },

  // database: process.env.DATABASE_URL,
});
