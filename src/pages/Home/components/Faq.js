import { Accordian } from '../../../components/Elements/Accordian';

export const Faq = () => {
    const faqs = [
        {
            id: 1,
            question: 'Do you offer bulk discounts?',
            answer: 'For bulk orders we may consider offering additional discount, where possible. Please email your details and as much information as possible regarding the products you require along with their quantities, to our Customer Support Team customercare@codebook.com',
        },
        {
            id: 2,
            question: 'Will the receiver see the price if item is bought as agift?',
            answer: 'We do not send any invoices with the orders and price information is not included with the Delivery Note.',
        },
        {
            id: 3,
            question: 'Can I cancel my order?',
            answer: 'If you would like to cancel an order placed on agendabookshop.com, please sign into your account and visit the ‘Orders’ page. If your order has not yet been delivered, you can request a cancellation by contacting our Customer Care Team on email customercare@codebook.com',
        },
        {
            id: 4,
            question: 'How can I return a Book?',
            answer: "You can return any book to us within 14 days of receiving your order. If you want to return a title, we'll complete a refund for you once we receive it back. We need to know the order number that your return is related to and whether the book was received as a gift.",
        },
        {
            id: 5,
            question: 'Do you sell audiobooks and / or ebooks?',
            answer: "We do not currently have an ebook provider, but our hope is to develop and launch our own ebooks platform in the near future! If a title is available through our audiobook partner's site, Libro.fm, it will be present on that title's individual product page.",
        },
        {
            id: 6,
            question: 'How long will an order take to arrive?',
            answer: 'In stock items are usually delivered within 2-4 working days. Non-stock items are usually delivered within 10-20 working days. Pre-orders will be delivered as soon as we receive the item from the publisher.',
        },
        {
            id: 7,
            question: 'How do I pay for an order?',
            answer: 'We accept payments made with the following credit cards: VISA, MasterCard, AMEX, VISA Debit, VISA Delta, Maestro, Electron. We are also happy to accept PayPal. Unfortunately, we are unable to accept Revolut.',
        },
        {
            id: 8,
            question: 'Do you deliver World wide?',
            answer: 'We are currently delivering  to Malta & Gozo. For International orders kindly send us the books list together with your address so that we can send you the Shipping cost.',
        },
        {
            id: 9,
            question: 'Can I change the delivery address of my order?',
            answer: 'Yes, you can change the delivery address for your order. Kindly send an email to our Customer Support Team customercare@codebook.com together with your order number.',
        },
        {
            id: 10,
            question: 'How can I track my package?',
            answer: 'Items from one order may be shipped in multiple packages. Each shipment will be assigned its own tracking number.',
        },
    ];

    return (
        <section className="flex justify-center items-center my-4 rounded-md border shadow-md dark:border-slate-600 dark:bg-slate-800">
            <div className="p-4 my-4 w-full">
                <h1 className="mb-10 font-serif text-2xl font-medium text-center underline underline-offset-8 text-slate-500 dark:text-gray-100/75">
                    Have Questions?
                </h1>

                {/* begin accordian items */}
                {faqs.map((item) => (
                    <Accordian key={item.id} question={item.question} answer={item.answer} />
                ))}
                {/* end accordian items */}
            </div>
        </section>
    );
};
