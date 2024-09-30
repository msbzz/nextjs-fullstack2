import Box from "@src/components/Box/Box";
import Text from '@src/components/Text/Text';
export default function BackGround(){
  const imageUrl='https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  return(<Box
     styleSheet={{
      backgroundImage:`url("${imageUrl}")`,
      width:'100%',
      height:'400px',
      backgroundPosition:'center',
      backgroundSize:'cover',
     }}
  /> )
}
