import desktop from '../assets/adaptive/desktop.svg'
import tablet from '../assets/adaptive/tablet.svg'
import mobile from '../assets/adaptive/mobile.svg'

import '../css/project.css'

export const Project = (props) => {

  const adaptive = (props) => {
    if (props.adapted == "3") {
      return (
        <div className='flex gap-2'>
          <img className='w-10' src={desktop} alt="desktop" />
          <img className='w-10' src={tablet} alt="tablet" />
          <img className='w-10' src={mobile} alt="mobile" />
        </div>
      )
    } else if (props.adapted == "2") {
      return (
        <div className='flex gap-2'>
          <img className='w-10' src={desktop} alt="desktop" />
          <img className='w-10' src={tablet} alt="tablet" />
        </div>
      )
    } else {
      return (
        <div className='flex gap-2'>
          <img className='w-10' src={desktop} alt="desktop" />
        </div>
      )
    }
  }

  return (
    <div className='inner'>
      <h1 className='title'>{props.name}</h1>
      <div className='projects'>
        <div className="projects__inner">
          <div className="projects__content">
            <div className="projects__description">
              <h4 className=''>Description:</h4>
              <p className=''>{props.description}</p>
              <h4 className=''>Adapted:</h4>
              <div className="">
                {adaptive(props)}
              </div>
            </div>
            <a className='' href={props.link} target="_blank">Go to website </a>
          </div>
          <img src={props.preview} alt="" className='preview'/>
        </div>
      </div>
    </div>
  )
}
