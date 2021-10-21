import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="description" content="Nomorecoding" />
                    <meta name="author" content="Nomorecoding" />
                    <meta name="keywords" content="Nomorecoding" />
                    {/* <!-- Fontfaces CSS- checking-> */}
                  
                    <link href="/vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all" />
                    <link href="/vendor/font-awesome-5/css/fontawesome-all.min.css" rel="stylesheet" media="all" />
                  

                    {/* <!-- Bootstrap CSS--> */}
                    <link href="/vendor/bootstrap-4.1/bootstrap.min.css" rel="stylesheet" media="all" />

                    {/* <!-- Jquery CSS--> */}
                    <script src="/vendor/jquery-3.2.1.min.js"></script>
                    

                    {/* <!-- Main CSS--> */}
                    <link href="/css/main.css" rel="stylesheet" media="all" />

                </Head>
                <body>
                    <Main />
                    <NextScript />

                    {/* <!-- Bootstrap and popper JS--> */}
                    <script src="/vendor/bootstrap-4.1/popper.min.js"></script>
                    <script src="/vendor/bootstrap-4.1/bootstrap.min.js"></script>


                    {/* <!-- Main JS--> */}
                    <script src="/js/main.js"></script>
            
                </body>
            </Html>
        );
    }
}

export default MyDocument;