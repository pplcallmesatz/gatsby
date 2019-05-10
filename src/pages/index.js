import React,{Fragment} from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"


// export default () => (
//   <div>
//     <Header headerText="About Gatsby sdgsga"  arbitraryPhrase="About arbitraryPhrase"  myProps={"my props"}/>
//
//     <Link to="/about/">Contact</Link>
//
//
//     <h1 style={{ color: 'red' }}>Hello satheesh!</h1>
//   <div>asdfghjkl</div>
//     <img src="https://source.unsplash.com/random/400x200" alt="" />
//   </div>
// )
//

// export default () => (
//   <div style={{margin: '30px auto', maxWidth: 600}}>
//     <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
//     <p>
//       What do I like to do? Lots of course but definitely enjoy building
//       websites.
//     </p>
//     <Link to="/about/">About</Link>
//     <Link to="/Contact/">Contact</Link>
//   </div>
//
//
//
// )
export default () => (
  <Fragment>
  <Layout>
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
    <Header headerText="About Gatsby sdgsga"    myProps={"my props"}/>

    <Link to="/about/">About</Link>
    <Link to="/contact/">Contact</Link>
  </Layout>

    <div className={'slick'}>
      <div className={'slider-content'}>One</div>
      <div className={'slider-content'}>two</div>
      <div className={'slider-content'}>Three</div>
      <div className={'slider-content'}>Four</div>
      <div className={'slider-content'}>Five</div>
      <div className={'slider-content'}>Six</div>
    </div>
    </Fragment>

)
