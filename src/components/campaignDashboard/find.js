
export const FindMyLawmaker = ({rep}) => {

return (
    <>
 {
rep.officials ? <div><h2>You Council Person is </h2><h2 className=" text-yellow-400">{rep.officials[5].name}</h2></div> : ""
}
</>


)}