import React, { useEffect, useState } from 'react'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Formik } from 'formik'
import { widrawSchema } from '../validationSchema/validationSchema'
import LocalError from '../Components/Error/validationError'
import { GetBanks } from '../services/tripService'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { submitWithdrawalRequest } from '../actions/tripAction';

function WithdrawBalance() {
	const navigate = useNavigate();
	const [bank, setBanks] = useState([])
	useEffect(() => {
		getBanks()
	}, []);
	const getBanks = async () => {
		let { data } = await GetBanks();
		setBanks(data?.model)
	};

	const dispatch = useDispatch();

	const handleSubmitForm = async (values) => {
		let res = dispatch(submitWithdrawalRequest(values,navigate));
	//	navigate('/my-wallet');
	};
	return (
		<>
			<Header />
			<section class="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }}>
				<div class="container">
					<div class="banner_head">
						<h1>My Wallet</h1>
						<p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p>
					</div>
					<div class="bredcrub">
						<a href="index.html" target="_self"> Home </a><span> <img src="images/arrow.png" alt="arrow" /></span>
						<p>My Wallet </p>
					</div>
				</div>
			</section>
			<section class="my_wallet withdraw_balance">
				<div class="container">
					<div class="withdraw_inner_box">
						<div class="wallet_bal withdraw_bal">
							<img src="images/Withdraw-balance.webp" alt="Withdraw-balance" />
							<h4>Wallet balance</h4>
							<p>The amount will be transferred to your account Within 24 hours</p>
						</div>
						<div class="withdraw_inner ptb60">
							<Formik
								enableReinitialize
								initialValues={{
									Amount: "",
									AccountNumber: "",
									BankId: ""
								}}
								validationSchema={widrawSchema}
								validateOnChange={false}
								validateOnBlur={false}
								onSubmit={async (values, { setSubmitting, resetForm }) => {
									setSubmitting(true);
									await handleSubmitForm(values);
									resetForm();
									setSubmitting(false);
								}}
							>
								{({
									values,
									errors,
									touched,
									handleChange,
									setFieldValue,
									handleSubmit
								}) =>
								(
									<form id="withdraw_form" onSubmit={handleSubmit} name="withdraw_form" >
										{/* <form class="withdraw_form" id="withdraw_form" method="post" action="#" name="withdraw_form"> */}
										<div class="withdraw_group" style={{marginTop:"40px"}}>
											<label for="license">The amount required</label>
											<input type="number" min={1} id="Amount" value={values?.Amount} placeholder="Attach a copy of the license" onChange={handleChange} />
											<LocalError touched={touched.Amount} error={errors.Amount} />
										</div>
										<div class="withdraw_group" style={{marginTop:"40px"}}>
											<label for="IBAN">IBAN number</label>
											<input type="text" id="AccountNumber" value={values?.AccountNumber} placeholder="Attach a copy of the license" onChange={handleChange} />
											<LocalError touched={touched.AccountNumber} error={errors.AccountNumber} />
										</div>
										<div class="withdraw_group" style={{marginTop:"40px"}}>
											<label for="bank_name">Bank Name</label>
											<select id="BankId" value={values?.BankId} onChange={handleChange}>
												{bank?.map((data) => {
													return (
														<option value={data?.Id}>{data?.Name}</option>
													)
												})}
												{/* <option value="Attach a copy of the license">Attach a copy of the license</option>
												<option value="Bank of India">Bank of India</option>
												<option value="State Bank of India">State Bank of India</option>
												<option value="Bank of America">Bank of America</option> */}
											</select>
											<LocalError touched={touched.BankId} error={errors.BankId} />
										</div>
										<button type="submit" class="withdraw_sub">Withdraw a balance</button>
									</form>
								)}
							</Formik>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default WithdrawBalance