import Head from "next/head"

const Layout = ({ title, keywords, description, children }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="icon" href="/favicon.ico" />

            </Head>
            <main>
                {children}
            </main>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Pokemon | Find Dragon',
    description: "Let's get some fun with pokemon",
    keywords: 'pokemon, fun, entertainment, cartoon'
}

export default Layout