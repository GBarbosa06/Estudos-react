/* codigos em typescript usam Pascal Case ou Upper Camel Case
 *  Substituir espaços por maiúsculas
 */

function Message(){
    const nome = 'Guilherme'
    return (
        <div className="logo">Olá {nome}</div>
    ) //esse código que será renderizado não será enviado como HTML, mas sim um componente react que será convertido do HTML
}

export default Message;