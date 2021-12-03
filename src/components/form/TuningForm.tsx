import { returnsCommonTuningForStringQty } from './helpers/defaultTunings';
import { updateFretboardViaForm } from '../appHelpers/appHelpers';
import createFretboard from '../fretboard/helpers/createFretboard';
import '../../CSS/TuningForm.css';

type GtrString = {
  display: string
  dictIndex: number
}

type PropTypes = {
  accidental: string,
  setFretboard: Function,
  fretboard: Array<GtrString>[],
  currentForm: boolean[],
  targetForm: boolean[],
  setTuning: Function,
}

const TuningForm = (props:PropTypes) => {

  let standardTuning = [4, 11, 7, 2, 9, 4]

  const changeStringAmount = (event:React.ChangeEvent<HTMLSelectElement>) => {
    let newTuning = returnsCommonTuningForStringQty(event.currentTarget.value) || standardTuning;
    props.setTuning(newTuning);
    let newFretboard = createFretboard(newTuning);
    updateFretboardViaForm(newFretboard, props.currentForm, props.targetForm)
    props.setFretboard(newFretboard);
  }

  return (
  <div>
    <label htmlFor="String Amount" className='string-qty-label'>Strings:</label>
    <br/>
      <select name="String Amount" className='string-qty-select' onChange={(e) => changeStringAmount(e)} defaultValue={6}>
        <option value={4}>{4}</option>
        <option value={5}>{5}</option>
        <option value={6}>{6}</option>
        <option value={7}>{7}</option>
        <option value={8}>{8}</option>
        <option value={9}>{9}</option>
      </select>
  </div>
  )
}

export default TuningForm