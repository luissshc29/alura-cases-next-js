import Link from "../src/components/Link";
import PageTitle from "../src/components/PageTitle";


export default function Page404() {
    return (
        <div>
            <PageTitle title='Página não encontrada - Alura Cases'/>
            <h1>Erro 404 - Página não encontrada :(</h1>
            <Link href="/">
                Ir para a Home
            </Link>        
        </div>
    )
}