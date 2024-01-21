interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...other }: ButtonProps): JSX.Element => {
  return (
    <button type="button" {...other}>
      {children}
    </button>
  );
};

export { Button };
export type { ButtonProps };
