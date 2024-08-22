export interface RoleSelectionCardProps {
    role: 'client' | 'freelancer';
    iconSrc: string;
    selectedRole: string;
    onRoleSelect: (role: 'client' | 'freelancer') => void;
    description: string;
    boldText: string;
  }

export interface SignupForm {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  country: string;
  phone_number: string;
  agreed_to_terms: boolean;
}