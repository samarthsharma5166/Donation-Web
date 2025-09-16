import React from 'react'
import SectionHeader from './SectionHeader'
import { ThreeDCardDemo } from './ThreeDCardDemo'

const BlogsSection = () => {
  return (
    <div className='py-8'>
        <SectionHeader heading="Latest Blogs" />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 container px-4 mx-auto sm:px-0'>
              <ThreeDCardDemo src='/blog.jpeg' heading='जितेंद्र अग्रवाल और डॉ. सुमन अग्रवाल का दौरा:' subHeading={"इस दौरे के दौरान उन्होंने स्थानीय गतिविधियों का अवलोकन किया और समाज के कल्याण के लिए किए जा रहे कार्यों पर चर्चा की।"} />
              <ThreeDCardDemo src='/blog.jpeg' heading='जितेंद्र अग्रवाल और डॉ. सुमन अग्रवाल का दौरा:' subHeading={"इस दौरे के दौरान उन्होंने स्थानीय गतिविधियों का अवलोकन किया और समाज के कल्याण के लिए किए जा रहे कार्यों पर चर्चा की।"} />

              <ThreeDCardDemo src='/blog.jpeg' heading='जितेंद्र अग्रवाल और डॉ. सुमन अग्रवाल का दौरा:' subHeading={"इस दौरे के दौरान उन्होंने स्थानीय गतिविधियों का अवलोकन किया और समाज के कल्याण के लिए किए जा रहे कार्यों पर चर्चा की।"} />

              <ThreeDCardDemo src='/blog.jpeg' heading='जितेंद्र अग्रवाल और डॉ. सुमन अग्रवाल का दौरा:' subHeading={"इस दौरे के दौरान उन्होंने स्थानीय गतिविधियों का अवलोकन किया और समाज के कल्याण के लिए किए जा रहे कार्यों पर चर्चा की।"} />
              <ThreeDCardDemo src='/blog.jpeg' heading='जितेंद्र अग्रवाल और डॉ. सुमन अग्रवाल का दौरा:' subHeading={"इस दौरे के दौरान उन्होंने स्थानीय गतिविधियों का अवलोकन किया और समाज के कल्याण के लिए किए जा रहे कार्यों पर चर्चा की।"} />
              <ThreeDCardDemo src='/blog.jpeg' heading='जितेंद्र अग्रवाल और डॉ. सुमन अग्रवाल का दौरा:' subHeading={"इस दौरे के दौरान उन्होंने स्थानीय गतिविधियों का अवलोकन किया और समाज के कल्याण के लिए किए जा रहे कार्यों पर चर्चा की।"} />

        </div>
    </div>
  )
}

export default BlogsSection