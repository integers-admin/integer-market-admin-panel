const FormStep5 = ({
  reportPrice,
  setReportPrice,
  faqData,
  handleFaqChange,
}) => {
  return (
    <>
      <div className="w-full m-auto flex flex-col gap-5 my-2">
        <div>
          <h1 className="text-24 font-medium text-primary">Pricing & Access</h1>
          <p className="text-16 font-regular text-primary">
            Set competitive price for report
          </p>
        </div>
        <div>
          <label
            className="text-16 font-medium text-primary"
            htmlFor="reportTitle"
          >
            Full Report Price (Fetch)
          </label>
          <input
            type="number"
            id="reportTitle"
            className="w-full border border-gray-200 h-10 px-0.5 text-20"
            placeholder="Full report price"
            value={reportPrice}
            onChange={(e) => setReportPrice(e.target.value)}
          />
        </div>

        {/* 1 */}
        <div>
          <label className="text-16 font-medium text-primary" htmlFor="que1">
            QUE (1)
          </label>
          <input
            type="text"
            id="que1"
            className="w-full border border-gray-200 h-10 px-0.5 text-20"
            placeholder="Question (1)"
            name="faqQue1"
            value={faqData.faqQue1}
            onChange={handleFaqChange}
          />
        </div>

        <div>
          <label className="text-16 font-medium text-primary" htmlFor="ans1">
            ANS (1)
          </label>
          <input
            type="text"
            id="ans1"
            className="w-full border border-gray-200 h-10 px-0.5 text-20"
            placeholder="Answer (1)"
            name="faqAns1"
            value={faqData.faqAns1}
            onChange={handleFaqChange}
          />
        </div>

        {/* 2 */}
        <div>
          <label className="text-16 font-medium text-primary" htmlFor="que2">
            QUE (2)
          </label>
          <input
            type="text"
            id="que2"
            className="w-full border border-gray-200 h-10 px-0.5 text-20"
            placeholder="Question (2)"
            name="faqQue2"
            value={faqData.faqQue2}
            onChange={handleFaqChange}
          />
        </div>

        <div>
          <label className="text-16 font-medium text-primary" htmlFor="ans2">
            ANS (2)
          </label>
          <input
            type="text"
            id="ans2"
            className="w-full border border-gray-200 h-10 px-0.5 text-20"
            placeholder="Answer (2)"
            name="faqAns2"
            value={faqData.faqAns2}
            onChange={handleFaqChange}
          />
        </div>

        {/* 3 */}
        <div>
          <label className="text-16 font-medium text-primary" htmlFor="que3">
            QUE (3)
          </label>
          <input
            type="text"
            id="que3"
            className="w-full border border-gray-200 h-10 px-0.5 text-20"
            placeholder="Question (3)"
            name="faqQue3"
            value={faqData.faqQue3}
            onChange={handleFaqChange}
          />
        </div>

        <div>
          <label className="text-16 font-medium text-primary" htmlFor="ans3">
            ANS (3)
          </label>
          <input
            type="text"
            id="ans3"
            className="w-full border border-gray-200 h-10 px-0.5 text-20"
            placeholder="Answer (3)"
            name="faqAns3"
            value={faqData.faqAns3}
            onChange={handleFaqChange}
          />
        </div>

        {/* 4 */}
        <div>
          <label className="text-16 font-medium text-primary" htmlFor="que4">
            QUE (4)
          </label>
          <input
            type="text"
            id="que4"
            className="w-full border border-gray-200 h-10 px-0.5 text-20"
            placeholder="Question (4)"
            name="faqQue4"
            value={faqData.faqQue4}
            onChange={handleFaqChange}
          />
        </div>

        <div>
          <label className="text-16 font-medium text-primary" htmlFor="ans4">
            ANS (4)
          </label>
          <input
            type="text"
            id="ans4"
            className="w-full border border-gray-200 h-10 px-0.5 text-20"
            placeholder="Answer (4)"
            name="faqAns4"
            value={faqData.faqAns4}
            onChange={handleFaqChange}
          />
        </div>

        {/* 5 */}
        <div>
          <label className="text-16 font-medium text-primary" htmlFor="que5">
            QUE (5)
          </label>
          <input
            type="text"
            id="que5"
            className="w-full border border-gray-200 h-10 px-0.5 text-20"
            placeholder="Question (5)"
            name="faqQue5"
            value={faqData.faqQue5}
            onChange={handleFaqChange}
          />
        </div>

        <div>
          <label className="text-16 font-medium text-primary" htmlFor="ans5">
            ANS (5)
          </label>
          <input
            type="text"
            id="ans5"
            className="w-full border border-gray-200 h-10 px-0.5 text-20"
            placeholder="Answer (5)"
            name="faqAns5"
            value={faqData.faqAns5}
            onChange={handleFaqChange}
          />
        </div>
      </div>
    </>
  );
};

export default FormStep5;
