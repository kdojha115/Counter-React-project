import FirstComponent, { FifthComponent } from './FirstComponent';
import FourthComponent from './FourthComponent';
import LearningJavascript from './LearningJavascript';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
export default function LearningComponent() {
    return (
        <div className="App">
            <FirstComponent />
            <SecondComponent />
            <ThirdComponent />
            <FourthComponent />
            <FifthComponent />
            <LearningJavascript />
        </div>
    )
}