import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBadgeColor(rating:number){
  if(rating > 7.5){
    return 'text-green-500';
  }else if(rating > 5){
    return 'text-orange-500';
  }else if (rating > 2.5){
    return 'text-yellow-500';
  }else if (rating >=0){
    return 'text-red-500';
  }
}