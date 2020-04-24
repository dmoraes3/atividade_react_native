// import React, {useState} from 'react';
// import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
// import LembreteItem from './components/LembreteItem'
// import LembreteInput from './components/LembreteInput';
// import Cabecalho from './components/Cabecalho';
// import TelaPrincal from './medidas/TelaPrincipal'

// export default function App() {

//   const [lembretes, setLembretes] = useState([]);

//   const [contadorLembretes, setContadorLembretes] = useState(10);

//   const adicionarLembrete = (lembrete, telefone) => {
//     //spread
//     setLembretes (lembretes => {
//       console.log (lembretes);
//       if(contadorLembretes % 2 == 1){
//         setContadorLembretes(contadorLembretes+1); 
//       }else{
//         setContadorLembretes(contadorLembretes+2); 
//       }
//       return [{key: contadorLembretes.toString(), value: "ID: " + contadorLembretes + "\nNome: " + lembrete + "\nTelefone: " + telefone}, ...lembretes];
//     });
//     // setNome("");
//     // setTelefone("");
//     //console.log (lembrete);
//   }

//   const removerLembrete = (keyASerRemovida) => {
//     setLembretes(lembretes =>{
//       return lembretes.filter(lembrete => lembrete.key !== keyASerRemovida);
//     })
//   }
  

//   return (

//     <View>
//       <Cabecalho titulo={'Agenda de Contatos'}/>
//       <View padding={TelaPrincal.TelaPrincipalPadding}>
//         <LembreteInput onAdicionarLembrete={adicionarLembrete}/>
//         <FlatList
//         data={lembretes}
//         renderItem={
//           lembrete => (
//             <LembreteItem 
//               lembrete={lembrete.item.value}
//               chave={lembrete.item.key}
//               onDelete={removerLembrete}
//             />
//           )          
//         }
//       />
//       </View>
//     </View>
      
//   );
// }










import React,{useState} from 'react';
import { View } from 'react-native';
import Cabecalho from './components/Cabecalho';
import TelaCadastro from './telas/TelaCadastro';
import TelaUsuario from './telas/TelaUsuario';

export default function App() {
  
  const[idUsuario, setIdUsuario] = useState();
  const[nomeUsuario, setNomeUsuario] = useState();
  const[telefoneUsuario, setTelefoneUsuario] = useState();
  const[telaInicial, setTelaInicial] = useState(true)
  const[telaUsuario, setTelaUsuario] = useState(false)

  const selecionaUsuarioId = (idUsuario) => {
    setIdUsuario(idUsuario);
  }

  const selecionaUsuarioNome = (nomeUsuario) => {
    setNomeUsuario(nomeUsuario);
  }

  const selecionaUsuarioTelefone = (telefoneUsuario) => {
    setTelefoneUsuario(telefoneUsuario);
  }

  const editarUsuario = (id, nome, telefone) => {
    setIdUsuario(id);
    setNomeUsuario(nome);
    setTelefoneUsuario(telefone);
  }

  const editarTelaUsuario = () => {
    setTelaUsuario(true);
    setTelaInicial(false);
  }

  const editarTelaInicio = () => {
    setTelaInicial(true);
    setTelaUsuario(false);
  }

  let conteudo;
  

  if(telaInicial === true){
    conteudo = <TelaCadastro 
              onSelecionaUsuarioId={selecionaUsuarioId}
              onSelecionaUsuarioNome={selecionaUsuarioNome}  
              onSelecionaUsuarioTelefone={selecionaUsuarioTelefone}
              onEditarTelaUsuario={editarTelaUsuario}
            />
  }
  
  if(telaUsuario === true){
    conteudo = <TelaUsuario 
                  id={idUsuario} 
                  nome={nomeUsuario} 
                  telefone={telefoneUsuario}
                  onEditarTelaInicio={editarTelaInicio}
                  onEditarUsuario={editarUsuario}
                />
  }

/*    if(telaUsuario === true){
    conteudo = <TelaUsuario 
                  id={idUsuario} 
                  nome={nomeUsuario} 
                  telefone={telefoneUsuario}
                  onEditarTelaEditarUsuario={editarTelaEditarUsuario}
                />  
  }*/

  return (
    
    <View>
      <Cabecalho titulo={'Agenda de Contatos'}/>
      {conteudo}
    </View>
   
  );
}