import Link from 'next/link';
import {buttonVariants} from '@/components/ui/button';
import {useAuth, UserButton} from "@clerk/nextjs";

interface AuthSectionProps {
    isMobile?: boolean;
    onAuthAction?: () => void;
}

const AuthSection = ({ isMobile = false, onAuthAction }: AuthSectionProps) => {
    const {isSignedIn} = useAuth();

    return (
        <div className={isMobile ? 'flex flex-col gap-4' : 'flex items-center gap-2'}>
            {isSignedIn ? (
                <UserButton />
            ) : (
                <>
                    <Link
                        href={'/sign-up'}
                        className={buttonVariants({
                            variant: 'outline',
                            className: isMobile ? 'w-full' : ''
                        })}
                        onClick={onAuthAction}
                    >
                        Register
                    </Link>
                    <Link
                        href={'/sign-in'}
                        className={buttonVariants({
                            variant: isMobile ? 'default' : 'link',
                            className: isMobile ? 'w-full' : ''
                        })}
                        onClick={onAuthAction}
                    >
                        Login
                    </Link>
                </>
            )}
        </div>
    )
}

export default AuthSection;

