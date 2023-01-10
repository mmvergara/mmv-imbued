import { accountInfo } from "../../types";

const AccountCard = (props: accountInfo) => {
  const { AccountName, email, passwordHint, username, websiteUrl, extraInfo } = props;

  return (
    <article className='text-left w-[320px] font-semibold text-priCyan bg-bgSecondary rounded-md p-2'>
      <p className='px-2 py-1 bg-neutral-600 '>{AccountName}</p>
      <p className='px-2 py-1'>
        Email <br /> <span className="text-neutral-500">{email}</span>
      </p>
      <p className='px-2 py-1'>
        Website Url <br /> <span className="text-neutral-500">{websiteUrl}</span>
      </p>
      <p className='px-2 py-1'>
        PasswordHint <br /> <span className="text-neutral-500">{passwordHint}</span>
      </p>
      <p className='px-2 py-1'>
        Username <br />
        <span className="text-neutral-500">{username}</span>
      </p>
      <p className='px-2 py-1 text-neutral-400'>{extraInfo}</p>
    </article>
  );
};

export default AccountCard;
