export const dbConnectionString = 'mongodb+srv://nik:NA7T4JExmRAPuGZ@cluster0.ozcp8.mongodb.net/testapp?authSource=admin&replicaSet=atlas-l28q1o-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true'
export const emailConfig = {
    contactemail: 'no-reply@yam-edu.com',
    websiteHost: "https://justgreen.in/",
    FromEmail: 'no-reply@yam-edu.com',
    EmailPassword: process.env.EMAIL_PASSWORD || "ogkxnvqezxaabusx",
    SmtpServer: "smtp.gmail.com",
    SmtpPort: 465,
    logoUrl: "https://unsplash.com/photos/Cys3W7_MXDU"
}

export const appName = 'NikhilApp';
export const loginType = {
    email: 0,
    socialSite: 1,
}