import React from 'react';
import Layout from '../components/layout/Layout';

function Page404() {
    return(
        <div>
            <Layout>
                <div className="container-fluid container-min-max-width text-center mt-5">
                    <h2>Error 404: Pagina nu a fost gasita</h2>
                </div>
            </Layout>
        </div>
    );
}

export default Page404;