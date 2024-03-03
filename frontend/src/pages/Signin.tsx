

import Qoute from '../components/Qoute'
import SiginAuth from '../components/SigninAuth'

const Signin = () => {
  return (
    <div>
              <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div>
              <SiginAuth />
            </div>
            <div className='hidden lg:block'>
                <Qoute />
            </div>
        </div>
    </div>
  )
}

export default Signin