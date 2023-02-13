import Router from "next/router";
import Head from "next/head";
import nProgress from "nprogress";
import { ChakraProvider, chakraProvider } from "@chakra-ui/react";


import Layout from '../compenents/Layout';


function myApp({Component, pageProps}){

    return (
        <>
            <Head>
               
            </Head>

            <ChakraProvider>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </ChakraProvider>

        </>
    );
}

export default myApp;