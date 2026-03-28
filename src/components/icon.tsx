interface IconProps extends React.ComponentProps<"svg"> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

const Icon = ({ svg: SvgComponent, className, ...props }: IconProps) => {
  return <SvgComponent className={className} {...props} />;
};

export default Icon;
