import { useCep } from "./Hooks/useCep";


export const ViaCep = () => {
    const endereco = useCep('60182035');

    return (
    <table>
        <tbody>
            <tr>
                <td>Cep:</td>
                <td>{endereco.cep}</td>
            </tr>
            <tr>
                <td>Bairro:</td>
                <td>{endereco.bairro}</td>
            </tr>
            <tr>
                <td>Complemento:</td>
                <td>{endereco.complemento}</td>
            </tr>
            <tr>
                <td>UF:</td>
                <td>{endereco.uf}</td>
            </tr>
            <tr>
                <td>Localidade:</td>
                <td>{endereco.localidade}</td>
            </tr>
        </tbody>
        
    </table>
  )
}
