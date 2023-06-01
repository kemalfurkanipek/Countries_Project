import '../Styles/ThemaColorInput.css'
// Interface
interface ThemaColor {
    colorFunction : (color: string|undefined) => void
}

const ThemaColorInput = (props:ThemaColor) => {

    //Functions
    const takeColor = (e:string) => {
         props.colorFunction(e)
    }

  return (
    <div className='themaColor_group'>
        <label className='themaColor_label' >Thema Color</label> 
      <input className='themaColor_picker' defaultValue={'#C57111'}  onChange={(e) => {takeColor(e.target.value)}}  type="color" />
    </div>
  )
}

export default ThemaColorInput
