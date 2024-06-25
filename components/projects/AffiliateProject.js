import Image from 'next/image'
import { projects } from '../../data'
import spinner from '../../public/spinner.gif'

import BrandView from '../../public/projects/affiliate-brand-view.png'
import BrandEditor from '../../public/projects/affiliate-brand-editor.png'
import BrandCreatorView from '../../public/projects/affiliate-brand-creator-view.png'
import BrandCreatorProfile from '../../public/projects/affiliate-brand-creator-profile.png'
import CreatorPage from '../../public/projects/affiliate-creator-page.png'

const AffiliateProject = () => {
  const projectInfo = projects.find(project => project.projectRoute === 'creator-affiliate')
  const {
    title,
    techType,
    appType,
    projectType,
    duration,
    image,
    description,
    skills,
    live,
    source,
  } = projectInfo || {}

  if (projectInfo === undefined)
    return (
      <div className='flex items-center justify-center h-full'>
        <Image src={spinner} alt='Spinner' width={500} height={500} />
      </div>
    )

  return (
    <div>
      <div className='container mx-auto px-4 xl:px-72 flex flex-col gap-2 sm:gap-5 items-start'>
        <h1 className='text-4xl sm:text-5xl text-primary'>[ {title} ]</h1>

        <div className='flex flex-col'>
          <h1 className='text-2xl'>
            {techType}, {appType}
          </h1>
          <div className='text-lg flex flex-col sm:flex-row items-start sm:items-center gap-0 sm:gap-2'>
            <h1>{projectType}</h1>
            <p className='text-3xl hidden sm:block'>·</p>
            <h1>{duration}</h1>
          </div>
          <div className='mt-3 flex flex-wrap gap-3'>
            {skills.map((item, index) => {
              return (
                <p
                  key={index}
                  className='bg-primary text-center flex items-center justify-center rounded-full py-[0.4rem] px-4 text-xs sm:text-sm'>
                  {item}
                </p>
              )
            })}
          </div>
        </div>

        <p>{description}</p>

        <div className='relative w-full lg:w-[75%] xl:w-full flex flex-col gap-3 mb-8'>
          <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
            <Image src={BrandView} alt={title} layout='fill' objectFit='cover' />
          </div>
          <p>
            In this view, brands can monitor the clicks, sales, and revenue generated from each of
            their affiliate links. They also have the ability to view the total clicks, total sales,
            and total revenue generated by all their affiliate links collectively. Additionally,
            brands can filter the data by creator and specify a date range for more detailed
            insights.
          </p>
        </div>

        <div className='relative w-full lg:w-[75%] xl:w-full flex flex-col gap-3 mb-8'>
          <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
            <Image src={BrandEditor} alt={title} layout='fill' objectFit='cover' />
          </div>
          <p>
            Brands can manage their links by clicking on the &quot;Manage Links&quot; button, which
            opens a modal allowing them to create, edit, and delete links. This feature also enables
            them to set URL parameters, add descriptions, and, most importantly, set the commission
            percentage for each creator using the link.
          </p>
        </div>

        <div className='relative w-full lg:w-[75%] xl:w-full flex flex-col gap-3 mb-8'>
          <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
            <Image src={BrandCreatorView} alt={title} layout='fill' objectFit='cover' />
          </div>
          <p>
            This view was developed in response to multiple brands requesting a comprehensive
            overview of each influencer&lsquo;s performance. Brands wanted to see how many links
            each influencer is using, along with the total number of clicks, conversions, and
            commissions for each influencer. This feature allows brands to track the metrics of
            their top-performing influencers and compare them to the rest of their influencer
            roster.
          </p>
        </div>

        <div className='relative w-full lg:w-[75%] xl:w-full flex flex-col gap-3 mb-8'>
          <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
            <Image src={BrandCreatorProfile} alt={title} layout='fill' objectFit='cover' />
          </div>
          <p>
            A brand user can click on a specific influencer, triggering a side modal to appear. This
            side modal displays the influencer&lsquo;s complete profile, including their niche,
            address, and detailed performance metrics for each of their social profiles.
          </p>
        </div>

        <div className='relative w-full lg:w-[75%] xl:w-full flex flex-col gap-3 mb-8'>
          <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
            <Image src={CreatorPage} alt={title} layout='fill' objectFit='cover' />
          </div>
          <p>
            Lastly, this view is accessible to influencers on their creator profiles. They can see
            all their clicks, conversions, and commissions, as well as view each of their links with
            the corresponding metrics. Influencers can filter the data by brand and specify a date
            range for more detailed insights. Additionally, they can view their pending payouts,
            including the amount and the expected payment date.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AffiliateProject
