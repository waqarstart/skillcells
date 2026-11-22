import {
  Award, Bot, BookOpen, BrainCircuit, Briefcase, Building2, CalendarDays, Check, Clock, Cloud, Code2, Globe, GraduationCap,
  Home, Info, LayoutDashboard, Mail, MapPin, Monitor, MonitorPlay, Network, Phone, Shield, Star, UserRound, Users, type LucideIcon,
} from "lucide-react";

/** Icon names selectable in the admin portal (see server/src/content/schema.ts ICONS). */
const MAP: Record<string, LucideIcon> = {
  home: Home, info: Info, "book-open": BookOpen, phone: Phone, "calendar-days": CalendarDays, users: Users, monitor: Monitor,
  "user-round": UserRound, "building-2": Building2, code: Code2, bot: Bot, cloud: Cloud, "layout-dashboard": LayoutDashboard,
  "graduation-cap": GraduationCap, briefcase: Briefcase, network: Network, "brain-circuit": BrainCircuit, "monitor-play": MonitorPlay,
  award: Award, shield: Shield, globe: Globe, star: Star, mail: Mail, "map-pin": MapPin, clock: Clock, check: Check,
};

export const iconFor = (name?: string, fallback: LucideIcon = Star): LucideIcon => (name && MAP[name]) || fallback;
