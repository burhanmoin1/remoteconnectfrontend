import { motion } from 'framer-motion';
import { RoleSelectionCardProps } from '@/app/types/common';

const SignUpRoleSelection = ({
  role,
  iconSrc,
  selectedRole,
  onRoleSelect,
  description,
  boldText,
}: RoleSelectionCardProps) => {
  const isSelected = selectedRole === role;
  
  return (
    <motion.div
      onClick={() => onRoleSelect(role)}
      whileHover={{scale: 1.04,
        transition: { duration: 0.1, ease: 'easeOut' },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1, ease: 'easeOut' },
      }}
      className={`relative text-md lg:text-lg cursor-pointer w-80 p-8 border-2 rounded-md text-center ${
        isSelected
          ? 'border-[#E61464] bg-[#F9F9F9]'
          : 'border-[#E8E8E8] hover:border-[#E61464] hover:bg-[#F9F9F9]'
      }`}
    >
      <img
        src={iconSrc}
        alt={`${role} Icon`}
        className="absolute top-2 left-2 h-6 w-6"
      />
      <input
        type="checkbox"
        checked={isSelected}
        readOnly
        className="absolute top-2 right-2 h-5 w-5 border-2 border-[#E8E8E8] accent-[#E61464] cursor-pointer"
      />
      A <span className='text-xl font-bold'>{boldText}</span> {description}
    </motion.div>
  );
};

export default SignUpRoleSelection;
