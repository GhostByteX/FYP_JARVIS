import React, { Fragment, useState } from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import '../styles/Search.css'
import pic1 from '../assets/searchCustomer.png'
import check from '../assets/check.png'

const Search = () => {
  const [dimensions, setDimension] = useState([250, 350])
  const [searchState, setSearchState] = useState(0)
  const [searchResponse, setSearchResponse] = useState([])
  const [dim1, setDim1] = useState([])
  const [dim2, setDim2] = useState([])
  const [dim3, setDim3] = useState([])
  const [dim4, setDim4] = useState([])
  const [dim5, setDim5] = useState([])
  const [dim6, setDim6] = useState([])
  const [dim7, setDim7] = useState([])
  const [dim8, setDim8] = useState([])
  const [dim9, setDim9] = useState([])
  const [dim10, setDim10] = useState([])
  const [dim11, setDim11] = useState([])
  const [dim12, setDim12] = useState([])
  const [dim13, setDim13] = useState([])
  const [dim14, setDim14] = useState([])
  const [dim15, setDim15] = useState([])
  const [dim16, setDim16] = useState([])
  const [dim17, setDim17] = useState([])
  const [dim18, setDim18] = useState([])
  const [dim19, setDim19] = useState([])
  const [dim20, setDim20] = useState([])
  const [dim21, setDim21] = useState([])
  const [dim22, setDim22] = useState([])
  const [dim23, setDim23] = useState([])
  const [dim24, setDim24] = useState([])
  const [clickCount, setClickCount] = useState(0)
  const [buttonClick1, setButtonClick1] = useState(0)
  const [buttonClick2, setButtonClick2] = useState(0)
  const [buttonClick3, setButtonClick3] = useState(0)
  const [buttonClick4, setButtonClick4] = useState(0)
  const [buttonClick5, setButtonClick5] = useState(0)
  const [buttonClick6, setButtonClick6] = useState(0)
  const [buttonClick7, setButtonClick7] = useState(0)
  const [buttonClick8, setButtonClick8] = useState(0)
  const [buttonClick9, setButtonClick9] = useState(0)
  const [buttonClick10, setButtonClick10] = useState(0)
  const [buttonClick11, setButtonClick11] = useState(0)
  const [buttonClick12, setButtonClick12] = useState(0)
  const [buttonClick13, setButtonClick13] = useState(0)
  const [buttonClick14, setButtonClick14] = useState(0)
  const [buttonClick15, setButtonClick15] = useState(0)
  const [buttonClick16, setButtonClick16] = useState(0)
  const [buttonClick17, setButtonClick17] = useState(0)
  const [buttonClick18, setButtonClick18] = useState(0)
  const [buttonClick19, setButtonClick19] = useState(0)
  const [buttonClick20, setButtonClick20] = useState(0)
  const [buttonClick21, setButtonClick21] = useState(0)
  const [buttonClick22, setButtonClick22] = useState(0)
  const [buttonClick23, setButtonClick23] = useState(0)
  const [buttonClick24, setButtonClick24] = useState(0)

  const updateDimensions = count => {
    //console.log(count)
    if (count == 0) {
      setDimension([250, 950])
    }
    if (count == 1) {
      setDimension([500, 350])
    }
    if (count == 2) {
      setDimension([500, 950])
    }
    if (count == 3) {
      setDimension([750, 350])
    }
    if (count == 4) {
      setDimension([750, 950])
    }
    if (count == 5) {
      setDimension([1000, 350])
    }
    if (count == 6) {
      setDimension([1000, 950])
    }
    if (count == 7) {
      setDimension([1250, 350])
    }
    if (count == 8) {
      setDimension([1250, 950])
    }
    if (count == 9) {
      setDimension([1500, 350])
    }
    if (count == 10) {
      setDimension([1500, 950])
    }
    if (count == 11) {
      setDimension([1750, 350])
    }
    if (count == 12) {
      setDimension([1750, 950])
    }
    if (count == 13) {
      setDimension([2000, 350])
    }
    if (count == 14) {
      setDimension([2000, 950])
    }
    if (count == 15) {
      setDimension([2250, 350])
    }
    if (count == 16) {
      setDimension([2250, 950])
    }
    if (count == 17) {
      setDimension([2500, 350])
    }
    if (count == 18) {
      setDimension([2500, 950])
    }
    if (count == 19) {
      setDimension([2750, 350])
    }
    if (count == 20) {
      setDimension([2750, 950])
    }
    if (count == 21) {
      setDimension([3000, 350])
    }
    if (count == 22) {
      setDimension([3000, 950])
    }
    if (count == 23) {
      setDimension([3250, 350])
    }
    if (count == 24) {
      setDimension([3250, 950])
    }
    if (count == 25) {
      setDimension([3500, 350])
    }

    //console.log(dimensions)
  }

  const actionButton1 = () => {
    setButtonClick1(!buttonClick1)
    setClickCount(clickCount + 1)
    setDim1(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton2 = () => {
    setButtonClick2(!buttonClick2)
    setClickCount(clickCount + 1)
    setDim2(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton3 = () => {
    setButtonClick3(!buttonClick3)
    setClickCount(clickCount + 1)
    setDim3(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton4 = () => {
    setButtonClick4(!buttonClick4)
    setClickCount(clickCount + 1)
    setDim4(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton5 = () => {
    setButtonClick5(!buttonClick5)
    setClickCount(clickCount + 1)
    setDim5(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton6 = () => {
    setButtonClick6(!buttonClick6)
    setClickCount(clickCount + 1)
    setDim6(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton7 = () => {
    setButtonClick7(!buttonClick7)
    setClickCount(clickCount + 1)
    setDim7(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton8 = () => {
    setButtonClick8(!buttonClick8)
    setClickCount(clickCount + 1)
    setDim8(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton9 = () => {
    setButtonClick9(!buttonClick9)
    setClickCount(clickCount + 1)
    setDim9(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton10 = () => {
    setButtonClick10(!buttonClick10)
    setClickCount(clickCount + 1)
    setDim10(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton11 = () => {
    setButtonClick11(!buttonClick11)
    setClickCount(clickCount + 1)
    setDim11(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton12 = () => {
    setButtonClick12(!buttonClick12)
    setClickCount(clickCount + 1)
    setDim12(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton13 = () => {
    setButtonClick13(!buttonClick13)
    setClickCount(clickCount + 1)
    setDim13(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton14 = () => {
    setButtonClick14(!buttonClick14)
    setClickCount(clickCount + 1)
    setDim14(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton15 = () => {
    setButtonClick15(!buttonClick15)
    setClickCount(clickCount + 1)
    setDim15(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton16 = () => {
    setButtonClick16(!buttonClick16)
    setClickCount(clickCount + 1)
    setDim16(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton17 = () => {
    setButtonClick17(!buttonClick17)
    setClickCount(clickCount + 1)
    setDim17(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton18 = () => {
    setButtonClick18(!buttonClick18)
    setClickCount(clickCount + 1)
    setDim18(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton19 = () => {
    setButtonClick19(!buttonClick19)
    setClickCount(clickCount + 1)
    setDim19(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton20 = () => {
    setButtonClick20(!buttonClick20)
    setClickCount(clickCount + 1)
    setDim20(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton21 = () => {
    setButtonClick21(!buttonClick21)
    setClickCount(clickCount + 1)
    setDim21(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton22 = () => {
    setButtonClick22(!buttonClick22)
    setClickCount(clickCount + 1)
    setDim22(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton23 = () => {
    setButtonClick23(!buttonClick23)
    setClickCount(clickCount + 1)
    setDim23(dimensions)
    updateDimensions(clickCount)
  }
  const actionButton24 = () => {
    setButtonClick24(!buttonClick24)
    setClickCount(clickCount + 1)
    setDim24(dimensions)
    updateDimensions(clickCount)
  }

  const [customerID, setCustomerID] = useState('')
  const [churnValue, setChurnValue] = useState(NaN)
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
  const handleCustomerIDChange = event => {
    setCustomerID(event.target.value)
  }
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
  const handleChurnValue = event => {
    setChurnValue(event.target.value)
  }

  const options = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ]
  const contractOptions = [
    { value: 'Month-to-Month', label: 'Month-to-Month' },
    { value: 'One Year', label: 'One Year' },
    { value: 'Two Year', label: 'Two Year' }
  ]
  const internetTypeOptions = [
    { value: 'Fiber Optic', label: 'Fiber Optic' },
    { value: 'Cable', label: 'Cable' },
    { value: 'DSL', label: 'DSL' }
  ]
  const paymentMethodOptions = [
    { value: 'Bank Withdrawal', label: 'Bank Withdrawal' },
    { value: 'Credit Card', label: 'Credit Card' },
    { value: 'Mailed Check', label: 'Mailed Check' }
  ]

  const tableFields = [
    'customer_id',
    'referred_a_friend',
    'number_of_referrals',
    'tenure_in_months',
    'avg_monthly_long_distance_charges',
    'internet_type',
    'avg_monthly_gb_download',
    'streaming_music',
    'contract',
    'paperless_billing',
    'payment_method',
    'monthly_charge',
    'total_regular_charges',
    'total_extra_data_charges',
    'total_long_distance_charges',
    'age',
    'dependents',
    'number_of_dependents',
    'city',
    'zip_code',
    'latitude',
    'longitude',
    'population',
    'churn_value',
    'cltv'
  ]

  const handleSearch = () => {
    const searchData = {
      customer_id: customerID,
      referred_a_friend: referredAFriend,
      number_of_referrals: noOfReferrals,
      tenure_in_months: tenureInMonths,
      avg_monthly_long_distance_charges: avgMonthlyLongDistanceCharges,
      internet_type: internetType,
      avg_monthly_gb_download: avgMonthlyGBDownload,
      streaming_music: streamingMusic,
      contract: contract,
      paperless_billing: paperlessBilling,
      payment_method: paymentMethod,
      monthly_charge: monthlyCharges,
      total_regular_charges: totalRegularCharges,
      total_extra_data_charges: totalExtraDataCharges,
      total_long_distance_charges: totalLongDistanceCharges,
      age: age,
      dependents: dependents,
      number_of_dependents: noOfDependents,
      city: city,
      zip_code: zipCode,
      latitude: latitude,
      longitude: longitude,
      population: population,
      churn_value: churnValue,
      cltv: cltv
    }

    const filteredData = Object.entries(searchData).reduce(
      (acc, [key, value]) => {
        if (value !== '') {
          acc[key] = value
        }
        return acc
      },
      {}
    )

    const filteredObj = Object.entries(filteredData).reduce(
      (acc, [key, value]) => {
        if (!Number.isNaN(value)) {
          acc[key] = value
        }
        return acc
      },
      {}
    )
    console.log(filteredObj)

    let response = fetch('https://kind-cyan-millipede-garb.cyclic.app/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(filteredObj)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSearchResponse(data)
        return data
      })
      .catch(error => {
        console.log(error)
      })

    setSearchState(1)
  }

  return (
    <Fragment>
      <Sidebar />
      {searchState === 0 && (
        <Fragment>
          <Header />
          <div className='filterBar'>
            <div className='filterTxt'>ADD</div>
            <div className='filterTxt1'>FILTER</div>
            <button className='filterButton1' onClick={actionButton1}>
              Age
            </button>
            {buttonClick1 === true && (
              <img className='check1' src={check} alt='check' />
            )}
            <button className='filterButton2' onClick={actionButton2}>
              City
            </button>
            {buttonClick2 === true && (
              <img className='check2' src={check} alt='check' />
            )}
            <button className='filterButton3' onClick={actionButton3}>
              Zip Code
            </button>
            {buttonClick3 === true && (
              <img className='check3' src={check} alt='check' />
            )}
            <button className='filterButton4' onClick={actionButton4}>
              Population
            </button>
            {buttonClick4 === true && (
              <img className='check4' src={check} alt='check' />
            )}
            <button className='filterButton5' onClick={actionButton5}>
              Latitude
            </button>
            {buttonClick5 === true && (
              <img className='check5' src={check} alt='check' />
            )}
            <button className='filterButton6' onClick={actionButton6}>
              Longitude
            </button>
            {buttonClick6 === true && (
              <img className='check6' src={check} alt='check' />
            )}
            <button className='filterButton7' onClick={actionButton7}>
              Dependents
            </button>
            {buttonClick7 === true && (
              <img className='check7' src={check} alt='check' />
            )}
            <button className='filterButton8' onClick={actionButton8}>
              No of Dependents
            </button>
            {buttonClick8 === true && (
              <img className='check8' src={check} alt='check' />
            )}
            <button className='filterButton9' onClick={actionButton9}>
              Churn Value
            </button>
            {buttonClick9 === true && (
              <img className='check9' src={check} alt='check' />
            )}
            <button className='filterButton10' onClick={actionButton10}>
              Contract
            </button>
            {buttonClick10 === true && (
              <img className='check10' src={check} alt='check' />
            )}
            <button className='filterButton11' onClick={actionButton11}>
              Cltv
            </button>
            {buttonClick11 === true && (
              <img className='check11' src={check} alt='check' />
            )}
            <button className='filterButton12' onClick={actionButton12}>
              Streaming Music
            </button>
            {buttonClick12 === true && (
              <img className='check12' src={check} alt='check' />
            )}
            <button className='filterButton13' onClick={actionButton13}>
              Paperless Billing
            </button>
            {buttonClick13 === true && (
              <img className='check13' src={check} alt='check' />
            )}
            <button className='filterButton14' onClick={actionButton14}>
              Payment Method
            </button>
            {buttonClick14 === true && (
              <img className='check14' src={check} alt='check' />
            )}
            <button className='filterButton15' onClick={actionButton15}>
              Internet Type
            </button>
            {buttonClick15 === true && (
              <img className='check15' src={check} alt='check' />
            )}
            <button className='filterButton16' onClick={actionButton16}>
              Monthly Charge
            </button>
            {buttonClick16 === true && (
              <img className='check16' src={check} alt='check' />
            )}
            <button className='filterButton17' onClick={actionButton17}>
              Total Regular Charges
            </button>
            {buttonClick17 === true && (
              <img className='check17' src={check} alt='check' />
            )}
            <button className='filterButton18' onClick={actionButton18}>
              Extra Data Charges
            </button>
            {buttonClick18 === true && (
              <img className='check18' src={check} alt='check' />
            )}
            <button className='filterButton19' onClick={actionButton19}>
              LongDistanceCharges
            </button>
            {buttonClick19 === true && (
              <img className='check19' src={check} alt='check' />
            )}
            <button className='filterButton20' onClick={actionButton20}>
              Referred a Friend
            </button>
            {buttonClick20 === true && (
              <img className='check20' src={check} alt='check' />
            )}
            <button className='filterButton21' onClick={actionButton21}>
              No of Referrals
            </button>
            {buttonClick21 === true && (
              <img className='check21' src={check} alt='check' />
            )}
            <button className='filterButton22' onClick={actionButton22}>
              Tenure in Months
            </button>
            {buttonClick22 === true && (
              <img className='check22' src={check} alt='check' />
            )}
            <button className='filterButton23' onClick={actionButton23}>
              Avg LD Charges
            </button>
            {buttonClick23 === true && (
              <img className='check23' src={check} alt='check' />
            )}
            <button className='filterButton24' onClick={actionButton24}>
              Avg GB Download
            </button>
            {buttonClick24 === true && (
              <img className='check24' src={check} alt='check' />
            )}
          </div>
          <input
            className='customerIDBox'
            type='text'
            placeholder='Enter Customer ID (e.g. 1234-ABCDE)'
            value={customerID}
            onChange={handleCustomerIDChange}
          />
          <button className='searchbutton' onClick={handleSearch}>
            Search
          </button>
          {buttonClick1 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim1[0] + 'px',
                left: dim1[1] + 'px'
              }}
            >
              <label className='fieldText'>Age</label>
              <input
                className='inputbox'
                type='number'
                value={age}
                onChange={handleAge}
              />
            </div>
          )}
          {buttonClick2 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim2[0] + 'px',
                left: dim2[1] + 'px'
              }}
            >
              <label className='fieldText'>City</label>
              <input
                className='inputbox'
                type='text'
                value={city}
                onChange={handleCity}
              />
            </div>
          )}
          {buttonClick3 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim3[0] + 'px',
                left: dim3[1] + 'px'
              }}
            >
              <label className='fieldText'>ZipCode</label>
              <input
                className='inputbox'
                type='number'
                value={zipCode}
                onChange={handleZipCode}
              />
            </div>
          )}
          {buttonClick4 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim4[0] + 'px',
                left: dim4[1] + 'px'
              }}
            >
              <label className='fieldText'>Population</label>
              <input
                className='inputbox'
                type='number'
                value={population}
                onChange={handlePopulation}
              />
            </div>
          )}
          {buttonClick5 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim5[0] + 'px',
                left: dim5[1] + 'px'
              }}
            >
              <label className='fieldText'>Latitude</label>
              <input
                className='inputbox'
                type='number'
                value={latitude}
                onChange={handleLatitude}
              />
            </div>
          )}
          {buttonClick6 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim6[0] + 'px',
                left: dim6[1] + 'px'
              }}
            >
              <label className='fieldText'>Longitude</label>
              <input
                className='inputbox'
                type='number'
                value={longitude}
                onChange={handleLongitude}
              />
            </div>
          )}
          {buttonClick7 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim7[0] + 'px',
                left: dim7[1] + 'px'
              }}
            >
              <label className='fieldText'>Dependents</label>
              {options.map(option => (
                <div
                  className='optionText'
                  style={{
                    position: 'relative',
                    top: '70px',
                    left: '75px',
                    height: '30px'
                  }}
                  key={option.value}
                >
                  <label>
                    <input
                      type='radio'
                      value={option.value}
                      checked={dependents === option.value}
                      onChange={() => setDependents(option.value)}
                    />
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          )}
          {buttonClick8 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim8[0] + 'px',
                left: dim8[1] + 'px'
              }}
            >
              <label className='fieldText'>Number of Dependents</label>
              <input
                className='inputbox'
                type='number'
                value={noOfDependents}
                onChange={handleNoOfDependents}
              />
            </div>
          )}
          {buttonClick9 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim9[0] + 'px',
                left: dim9[1] + 'px'
              }}
            >
              <label className='fieldText'>Churn Value</label>
              <input
                className='inputbox'
                placeholder='"0" or "1"'
                type='number'
                value={churnValue}
                onChange={handleChurnValue}
              />
            </div>
          )}
          {buttonClick10 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim10[0] + 'px',
                left: dim10[1] + 'px'
              }}
            >
              <label className='fieldText'>Contract</label>
              {contractOptions.map(contractOptions => (
                <div
                  className='optionText'
                  style={{
                    position: 'relative',
                    top: '70px',
                    left: '75px',
                    height: '30px'
                  }}
                  key={contractOptions.value}
                >
                  <label>
                    <input
                      type='radio'
                      value={contractOptions.value}
                      checked={contract === contractOptions.value}
                      onChange={() => setContract(contractOptions.value)}
                    />
                    {contractOptions.label}
                  </label>
                </div>
              ))}
            </div>
          )}
          {buttonClick11 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim11[0] + 'px',
                left: dim11[1] + 'px'
              }}
            >
              <label className='fieldText'>CLTV</label>
              <input
                className='inputbox'
                type='number'
                value={cltv}
                onChange={handleCltv}
              />
            </div>
          )}
          {buttonClick12 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim12[0] + 'px',
                left: dim12[1] + 'px'
              }}
            >
              <label className='fieldText'>Streaming Music</label>
              {options.map(option => (
                <div
                  className='optionText'
                  style={{
                    position: 'relative',
                    top: '70px',
                    left: '75px',
                    height: '30px'
                  }}
                  key={option.value}
                >
                  <label>
                    <input
                      type='radio'
                      value={option.value}
                      checked={streamingMusic === option.value}
                      onChange={() => setStreamingMusic(option.value)}
                    />
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          )}
          {buttonClick13 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim13[0] + 'px',
                left: dim13[1] + 'px'
              }}
            >
              <label className='fieldText'>Paperless Billing</label>
              {options.map(option => (
                <div
                  className='optionText'
                  style={{
                    position: 'relative',
                    top: '70px',
                    left: '75px',
                    height: '30px'
                  }}
                  key={option.value}
                >
                  <label>
                    <input
                      type='radio'
                      value={option.value}
                      checked={paperlessBilling === option.value}
                      onChange={() => setPaperlessBilling(option.value)}
                    />
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          )}
          {buttonClick14 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim14[0] + 'px',
                left: dim14[1] + 'px'
              }}
            >
              <label className='fieldText'>Payment Method</label>
              {paymentMethodOptions.map(paymentMethodOptions => (
                <div
                  className='optionText'
                  style={{
                    position: 'relative',
                    top: '70px',
                    left: '75px',
                    height: '30px'
                  }}
                  key={paymentMethodOptions.value}
                >
                  <label>
                    <input
                      type='radio'
                      value={paymentMethodOptions.value}
                      checked={paymentMethod === paymentMethodOptions.value}
                      onChange={() =>
                        setPaymentMethod(paymentMethodOptions.value)
                      }
                    />
                    {paymentMethodOptions.label}
                  </label>
                </div>
              ))}
            </div>
          )}
          {buttonClick15 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim15[0] + 'px',
                left: dim15[1] + 'px'
              }}
            >
              <label className='fieldText'>Internet Type</label>
              {internetTypeOptions.map(internetTypeOptions => (
                <div
                  className='optionText'
                  style={{
                    position: 'relative',
                    top: '70px',
                    left: '75px',
                    height: '30px'
                  }}
                  key={internetTypeOptions.value}
                >
                  <label>
                    <input
                      type='radio'
                      value={internetTypeOptions.value}
                      checked={internetType === internetTypeOptions.value}
                      onChange={() =>
                        setInternetType(internetTypeOptions.value)
                      }
                    />
                    {internetTypeOptions.label}
                  </label>
                </div>
              ))}
            </div>
          )}
          {buttonClick16 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim16[0] + 'px',
                left: dim16[1] + 'px'
              }}
            >
              <label className='fieldText'>Monthly Charge</label>
              <input
                className='inputbox'
                type='number'
                value={monthlyCharges}
                onChange={handleMonthlyCharges}
              />
            </div>
          )}
          {buttonClick17 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim17[0] + 'px',
                left: dim17[1] + 'px'
              }}
            >
              <label className='fieldText'>Total Regular Charges</label>
              <input
                className='inputbox'
                type='number'
                value={totalRegularCharges}
                onChange={handleTotalRegularCharges}
              />
            </div>
          )}
          {buttonClick18 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim18[0] + 'px',
                left: dim18[1] + 'px'
              }}
            >
              <label className='fieldText'>Total Extra Data Charges</label>
              <input
                className='inputbox'
                type='number'
                value={totalExtraDataCharges}
                onChange={handleTotalExtraDataCharges}
              />
            </div>
          )}
          {buttonClick19 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim19[0] + 'px',
                left: dim19[1] + 'px'
              }}
            >
              <label className='fieldText'>Total Long Distance Charges</label>
              <input
                className='inputbox'
                type='number'
                value={totalLongDistanceCharges}
                onChange={handleTotalLongDistanceCharges}
              />
            </div>
          )}
          {buttonClick20 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim20[0] + 'px',
                left: dim20[1] + 'px'
              }}
            >
              <label className='fieldText'>Referred a Friend</label>
              {options.map(option => (
                <div
                  className='optionText'
                  style={{
                    position: 'relative',
                    top: '70px',
                    left: '75px',
                    height: '30px'
                  }}
                  key={option.value}
                >
                  <label>
                    <input
                      type='radio'
                      value={option.value}
                      checked={referredAFriend === option.value}
                      onChange={() => setReferredAFriend(option.value)}
                    />
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          )}
          {buttonClick21 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim21[0] + 'px',
                left: dim21[1] + 'px'
              }}
            >
              <label className='fieldText'>Number of Referral</label>
              <input
                className='inputbox'
                type='number'
                value={noOfReferrals}
                onChange={handleNoOfReferrals}
              />
            </div>
          )}
          {buttonClick22 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim22[0] + 'px',
                left: dim22[1] + 'px'
              }}
            >
              <label className='fieldText'>Tenure in Months</label>
              <input
                className='inputbox'
                type='number'
                value={tenureInMonths}
                onChange={handleTenureInMonths}
              />
            </div>
          )}
          {buttonClick23 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim23[0] + 'px',
                left: dim23[1] + 'px'
              }}
            >
              <label className='fieldText'>
                Avg Monthly Long Distance Charges
              </label>
              <input
                className='inputbox'
                type='number'
                value={avgMonthlyLongDistanceCharges}
                onChange={handleAvgMonthlyLongDistanceCharges}
              />
            </div>
          )}
          {buttonClick24 === true && (
            <div
              className='filterCard'
              style={{
                position: 'absolute',
                top: dim24[0] + 'px',
                left: dim24[1] + 'px'
              }}
            >
              <label className='fieldText'>Avg Monthly GB Download</label>
              <input
                className='inputbox'
                type='number'
                value={avgMonthlyGBDownload}
                onChange={handleAvgMonthlyGBDownload}
              />
            </div>
          )}
        </Fragment>
      )}
      <h1 className='welcomeetxt'>
        Search <span className='welcomeetxtspan'>Customer</span>
      </h1>
      <img className='wave1' src={pic1} alt='search' />
      {searchState === 1 && (
        <Fragment>
          <table className='table'>
            <thead>
              <tr>
                {tableFields.map(field => (
                  <th key={field}>{field}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {searchResponse.map((item, index) => (
                <tr key={index}>
                  {tableFields.map(field => (
                    <td key={`${index}-${field}`}>{item[field]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Search
