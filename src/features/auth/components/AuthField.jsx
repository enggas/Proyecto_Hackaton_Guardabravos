export const AuthField = ({
  id,
  label,
  headerRight,
  icon: Icon,
  type = 'text',
  value,
  onChange,
  placeholder,
  autoComplete = 'off',
  rightAdornment,
  required = true,
  minLength,
}) => (
  <div>
    <div className="flex items-center justify-between mb-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      {headerRight}
    </div>
    <div className="relative">
      <Icon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        minLength={minLength}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full pl-10 ${rightAdornment ? 'pr-10' : 'pr-3'} py-2.5 border border-line rounded-lg text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent`}
      />
      {rightAdornment}
    </div>
  </div>
)
