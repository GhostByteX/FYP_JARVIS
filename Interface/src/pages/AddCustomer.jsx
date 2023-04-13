import React, { useState } from 'react'
import { Fragment } from 'react'
import '../styles/AddCustomer.css'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import user from '../assets/user.png'
import check from '../assets/check.png'

const AddCustomer = () => {
  const [churnText, setChurnText] = useState('')
  const [submitCheck, setSubmitCheck] = useState(0)
  const [churnValue, setChurnValue] = useState(0)
  const [customerID, setCustomerID] = useState('N/A')
  const [city, setCity] = useState('')
  const [age, setAge] = useState(NaN)
  const [zipCode, setZipCode] = useState(NaN)
  const [population, setPopulation] = useState(NaN)
  const [streamingMusic, setStreamingMusic] = useState('')
  const [latitude, setLatitude] = useState(NaN)
  const [longitude, setLongitude] = useState(NaN)
  const [dependents, setDependents] = useState('')
  const [noOfDependents, setNoOfDependents] = useState(NaN)
  const [cltv, setCltv] = useState(NaN)
  const [contract, setContract] = useState('')
  const [paperlessBilling, setPaperlessBilling] = useState('')
  const [internetType, setInternetType] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [monthlyCharges, setMonthlyCharges] = useState(NaN)
  const [totalRegularCharges, setTotalRegularCharges] = useState(NaN)
  const [totalExtraDataCharges, setTotalExtraDataCharges] = useState(NaN)
  const [totalLongDistanceCharges, setTotalLongDistanceCharges] = useState(NaN)
  const [referredAFriend, setReferredAFriend] = useState('')
  const [noOfReferrals, setNoOfReferrals] = useState(NaN)
  const [tenureInMonths, setTenureInMonths] = useState(NaN)
  const [avgMonthlyLongDistanceCharges, setAvgMonthlyLongDistanceCharges] =
    useState(NaN)
  const [avgMonthlyGBDownload, setAvgMonthlyGBDownload] = useState(NaN)

  const handleAge = event => {
    setAge(event.target.value)
  }
  const handleCity = event => {
    setCity(event.target.value)
  }
  const handleZipCode = event => {
    setZipCode(event.target.value)
  }
  const handlePopulation = event => {
    setPopulation(event.target.value)
  }
  const handleStreamingMusic = event => {
    setStreamingMusic(event.target.value)
  }
  const handleLatitude = event => {
    setLatitude(event.target.value)
  }
  const handleLongitude = event => {
    setLongitude(event.target.value)
  }
  const handleDependents = event => {
    setDependents(event.target.value)
  }
  const handleNoOfDependents = event => {
    setNoOfDependents(event.target.value)
  }
  const handleCltv = event => {
    setCltv(event.target.value)
  }
  const handleContract = event => {
    setContract(event.target.value)
  }
  const handlePaperlessBilling = event => {
    setPaperlessBilling(event.target.value)
  }
  const handleInternetType = event => {
    setInternetType(event.target.value)
  }
  const handlePaymentMethod = event => {
    setPaymentMethod(event.target.value)
  }
  const handleMonthlyCharges = event => {
    setMonthlyCharges(event.target.value)
  }
  const handleTotalRegularCharges = event => {
    setTotalRegularCharges(event.target.value)
  }
  const handleTotalExtraDataCharges = event => {
    setTotalExtraDataCharges(event.target.value)
  }
  const handleTotalLongDistanceCharges = event => {
    setTotalLongDistanceCharges(event.target.value)
  }
  const handleReferredAFriend = event => {
    setReferredAFriend(event.target.value)
  }
  const handleNoOfReferrals = event => {
    setNoOfReferrals(event.target.value)
  }
  const handleTenureInMonths = event => {
    setTenureInMonths(event.target.value)
  }
  const handleAvgMonthlyLongDistanceCharges = event => {
    setAvgMonthlyLongDistanceCharges(event.target.value)
  }
  const handleAvgMonthlyGBDownload = event => {
    setAvgMonthlyGBDownload(event.target.value)
  }
  const handleAddCustomer = () => {
    setSubmitCheck(0)
  }
  const updateChurnValue = data => {
    setChurnValue(data)
  }
  const handleSubmit = event => {
    event.preventDefault()
    const submitData = {
      "referred a friend": referredAFriend,
      "number of referrals": noOfReferrals,
      "tenure in months": tenureInMonths,
      "avg monthly long distance charges": avgMonthlyLongDistanceCharges,
      "internet type": internetType,
      "avg monthly gb download": avgMonthlyGBDownload,
      "streaming music": streamingMusic,
      "contract": contract,
      "paperless billing": paperlessBilling,
      "payment method": paymentMethod,
      "monthly charge": monthlyCharges,
      "total regular charges": totalRegularCharges,
      "total extra data charges": totalExtraDataCharges,
      "total long distance charges": totalLongDistanceCharges,
      "age": age,
      "dependents": dependents,
      "number of dependents": noOfDependents,
      "city": city,
      "zip code": zipCode,
      "latitude": latitude,
      "longitude": longitude,
      "population": population,
      "churn value": churnValue,
      "cltv": cltv
    }
    setSubmitCheck(1)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    console.log(submitData)
    // fetch('https://fyp-model-api.onrender.com/')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //   })

    let response = fetch('https://fyp-model-api.onrender.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.updateChurnValue(data)
        return data
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <h1 className='welcomeetxt'>
        Add <span className='welcomeetxtspan'>Customer</span>
      </h1>
      <img className='wave2' src={user} alt='user' />
      {submitCheck === 0 && (
        <form className='Text' onSubmit={handleSubmit}>
          <label className='ageText'>Age</label>
          <input
            className='AgeTextbox'
            type='number'
            value={age}
            onChange={handleAge}
          />
          <label className='cityText'>City</label>
          <input
            className='CityTextbox'
            type='text'
            value={city}
            onChange={handleCity}
          />
          <label className='zipCodeText'>ZipCode</label>
          <input
            className='zipCodeTextbox'
            type='number'
            value={zipCode}
            onChange={handleZipCode}
          />
          <label className='populationText'>Population</label>
          <input
            className='populationTextbox'
            type='number'
            value={population}
            onChange={handlePopulation}
          />
          <label className='longitudeText'>Longitude</label>
          <input
            className='longitudeTextbox'
            type='number'
            value={longitude}
            onChange={handleLongitude}
          />
          <label className='latitudeText'>Latitude</label>
          <input
            className='latitudeTextbox'
            type='number'
            value={latitude}
            onChange={handleLatitude}
          />
          <label className='streamingMusicText'>Streaming Music</label>
          <select
            className='streamingMusicTextbox'
            value={streamingMusic}
            onChange={handleStreamingMusic}
          >
            <option value='' disabled selected>
              Select
            </option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>
          <label className='dependentsText'>Dependents</label>
          <select
            className='dependentsTextbox'
            value={dependents}
            onChange={handleDependents}
          >
            <option value='' disabled selected>
              Select
            </option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>
          <label className='noOfDependentsText'>Number of Dependents</label>
          <input
            className='noOfDependentsTextbox'
            type='number'
            value={noOfDependents}
            onChange={handleNoOfDependents}
          />
          <label className='cltvText'>CLTV</label>
          <input
            className='cltvTextbox'
            type='number'
            value={cltv}
            onChange={handleCltv}
          />
          <label className='contractText'>Contract</label>
          <select
            className='contractTextbox'
            value={contract}
            onChange={handleContract}
          >
            <option value='' disabled selected>
              Select
            </option>
            <option value='Month-to-Month'>Month-to-Month</option>
            <option value='One Year'>One Year</option>
            <option value='Two Year'>Two Year</option>
          </select>
          <label className='paperlessBillingText'>Paperless Billing</label>
          <select
            className='paperlessBillingTextbox'
            value={paperlessBilling}
            onChange={handlePaperlessBilling}
          >
            <option value='' disabled selected>
              Select
            </option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>
          <label className='internetTypeText'>Internet Type</label>
          <select
            className='internetTypeTextbox'
            value={internetType}
            onChange={handleInternetType}
          >
            <option value='' disabled selected>
              Select
            </option>
            <option value='Fiber Optic'>Fiber Optic</option>
            <option value='Cable'>Cable</option>
            <option value='DSL'>DSL</option>
          </select>
          <label className='paymentMethodText'>Payment Method</label>
          <select
            className='paymentMethodTextbox'
            value={paymentMethod}
            onChange={handlePaymentMethod}
          >
            <option value='' disabled selected>
              Select
            </option>
            <option value='Bank Withdrawal'>Bank Withdrawal</option>
            <option value='Credit Card'>Credit Card</option>
            <option value='Mailed Check'>Mailed Check</option>
          </select>
          <label className='monthlyChargesText'>Monthly Charge</label>
          <input
            className='monthlyChargesTextbox'
            type='number'
            value={monthlyCharges}
            onChange={handleMonthlyCharges}
          />
          <label className='charges1Text'>Total Regular Charges</label>
          <input
            className='charges1Textbox'
            type='number'
            value={totalRegularCharges}
            onChange={handleTotalRegularCharges}
          />
          <label className='charges2Text'>Total Extra Data Charges</label>
          <input
            className='charges2Textbox'
            type='number'
            value={totalExtraDataCharges}
            onChange={handleTotalExtraDataCharges}
          />
          <label className='charges3Text'>Total Long Distance Charges</label>
          <input
            className='charges3Textbox'
            type='number'
            value={totalLongDistanceCharges}
            onChange={handleTotalLongDistanceCharges}
          />
          <label className='referredAFriendText'>Referred a Friend</label>
          <select
            className='referredAFriendTextbox'
            value={referredAFriend}
            onChange={handleReferredAFriend}
          >
            <option value='' disabled selected>
              Select
            </option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>
          <label className='noOfReferralText'>Number of Referral</label>
          <input
            className='noOfReferralTextbox'
            type='number'
            value={noOfReferrals}
            onChange={handleNoOfReferrals}
          />
          <label className='tenureInMonthsText'>Tenure in Months</label>
          <input
            className='tenureInMonthsTextbox'
            type='number'
            value={tenureInMonths}
            onChange={handleTenureInMonths}
          />
          <label className='charge4Text'>
            Avg Monthly Long Distance Charges
          </label>
          <input
            className='charge4Textbox'
            type='number'
            value={avgMonthlyLongDistanceCharges}
            onChange={handleAvgMonthlyLongDistanceCharges}
          />
          <label className='charge5Text'>Avg Monthly GB Download</label>
          <input
            className='charge5Textbox'
            type='number'
            value={avgMonthlyGBDownload}
            onChange={handleAvgMonthlyGBDownload}
          />
          <button type='submit' className='submitbutton'>
            Submit
          </button>
        </form>
      )}
      {submitCheck === 1 && (
        <Fragment>
          <div className='resultBox'>
            <div className='promptText1'>CUSTOMER ADDED SUCCESSFULLY!</div>
            <img className='tick' src={check} alt='check' />
            <div className='resultIDtag'>{customerID}</div>
            {churnValue === 0 && setChurnText('Non-Churner')}
            {churnValue === 1 && setChurnText('Churner')}
            {churnValue === -1 && setChurnText('Undecided')}
            <div className='resultStatustag'>{churnText}</div>
          </div>
          <button className='addbutton' onClick={handleAddCustomer}>
            Add Another Customer
          </button>
        </Fragment>
      )}
    </Fragment>
  )
}

export default AddCustomer
