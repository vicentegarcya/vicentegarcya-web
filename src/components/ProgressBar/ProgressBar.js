import '../ProgressBar/ProgressBar.css';

function ProgressBar({progress}) {
    return (
        <div className="ProgressBar">
            <div className='ProgressBarActual' style={{ width: `${progress}vw` }}></div>
        </div>
    )
}

export default ProgressBar;