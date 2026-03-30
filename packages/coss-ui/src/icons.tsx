import { Icon as Iconify } from "@iconify/react";
import { registerCustomIcons } from "./custom-icons";

/**
 * Register custom icons on client-side only
 * This is called once when the module loads, but only in the browser
 */
if (typeof window !== "undefined") {
  registerCustomIcons();
}

/**
 * Create an icon component that works with both Iconify icons and custom icons
 *
 * @param iconName - Icon name in format "prefix:name" (e.g., "glyphs-poly:activity" or "custom:brand")
 * @param testId - Test ID for testing purposes
 *
 * @example
 * // Iconify icon
 * export const ActivityIcon = createIcon("glyphs-poly:activity", "activity-icon");
 *
 * // Custom icon
 * export const BrandIcon = createIcon("custom:brand", "brand-icon");
 */
function createIcon(iconName: string, testId: string) {
  return function WrappedIcon({ size = 24, className, onClick }: IconProps) {
    return (
      <Iconify
        icon={iconName}
        width={size}
        height={size}
        className={className}
        onClick={onClick}
        data-testid={testId}
      />
    );
  };
}

export interface IconProps {
  size?: number;
  className?: string;
  onClick?: () => void;
}
export const ActivityIcon = createIcon("glyphs-poly:activity", "activity-icon");
export const AppsIcon = createIcon("custom:apps", "apps-icon");
export const ArrowDownIcon = createIcon("custom:arrowDown", "arrow-down-icon");
export const ArrowLeftIcon = createIcon("custom:arrowLeft", "arrow-left-icon");
export const ArrowRightIcon = createIcon("custom:arrowRight", "arrow-right-icon");
export const ArrowUpRightIcon = createIcon("glyphs-poly:arrow-external", "arrow-up-right-icon");
export const ArrowUpIcon = createIcon("custom:arrowUp", "arrow-up-icon");
export const AsteriskIcon = createIcon("glyphs-poly:asterisk", "asterisk-icon");
export const AtSignIcon = createIcon("glyphs-poly:at", "at-sign-icon");
export const AtomIcon = createIcon("glyphs-poly:bezier-hexagon", "atom-icon");
export const BadgeCheckIcon = createIcon("glyphs-poly:badge", "badge-check-icon");
export const BanIcon = createIcon("glyphs-poly:stop-hand", "ban-icon");
export const BellIcon = createIcon("glyphs-poly:bell", "bell-icon");
export const BinaryIcon = createIcon("glyphs-poly:code-1", "binary-icon");
export const BlocksIcon = createIcon("glyphs-poly:box-layout-4", "blocks-icon");
export const BoldIcon = createIcon("glyphs-poly:bold", "bold-icon");
export const BookOpenCheckIcon = createIcon("glyphs-poly:book-open", "book-open-check-icon");
export const BookOpenIcon = createIcon("glyphs-poly:book-open", "book-open-icon");
export const BookUserIcon = createIcon("glyphs-poly:book", "book-user-icon");
export const BookIcon = createIcon("glyphs-poly:book", "book-icon");
export const BookmarkIcon = createIcon("glyphs-poly:bookmark", "bookmark-icon");
export const BuildingIcon = createIcon("glyphs-poly:building", "building-icon");
export const CalendarCheck2Icon = createIcon("glyphs-poly:calendar-check", "calendar-check-2-icon");
export const CalendarDaysIcon = createIcon("glyphs-poly:calendar", "calendar-days-icon");
export const CalendarHeartIcon = createIcon("glyphs-poly:calendar-heart", "calendar-heart-icon");
export const CalendarRangeIcon = createIcon("glyphs-poly:calendar-range", "calendar-range-icon");
export const CalendarSearchIcon = createIcon("glyphs-poly:calendar-search", "calendar-search-icon");
export const CalendarX2Icon = createIcon("glyphs-poly:calendar-x", "calendar-x-2-icon");
export const CalendarIcon = createIcon("glyphs-poly:calendar", "calendar-icon");
export const ChartBarIcon = createIcon("glyphs-poly:chart-bar", "chart-bar-icon");
export const ChartLineIcon = createIcon("glyphs-poly:chart-line", "chart-line-icon");
export const CheckCheckIcon = createIcon("glyphs-poly:check-double", "check-check-icon");
export const CheckIcon = createIcon("glyphs-poly:check", "check-icon");
export const ChevronDownIcon = createIcon("custom:chevronDown", "chevron-down-icon");
export const ChevronLeftIcon = createIcon("glyphs-poly:chevron-left", "chevron-left-icon");
export const ChevronRightIcon = createIcon("glyphs-poly:chevron-right", "chevron-right-icon");
export const ChevronUpIcon = createIcon("glyphs-poly:chevron", "chevron-up-icon");
export const ChevronsDownUpIcon = createIcon("glyphs-poly:chevrons-down-up", "chevrons-down-up-icon");
export const ChevronsLeftIcon = createIcon("glyphs-poly:chevrons-left", "chevrons-left-icon");
export const ChevronsRightIcon = createIcon("glyphs-poly:chevrons-right", "chevrons-right-icon");
export const ChevronsUpDownIcon = createIcon("glyphs-poly:chevrons-up-down", "chevrons-up-down-icon");
export const CircleAlertIcon = createIcon("glyphs-poly:exclamation-circle", "circle-alert-icon");
export const CircleArrowUpIcon = createIcon("glyphs-poly:arrow-circle", "circle-arrow-up-icon");
export const CircleCheckBigIcon = createIcon("glyphs-poly:check-circle", "circle-check-big-icon");
export const CircleCheckIcon = createIcon("glyphs-poly:check-circle", "circle-check-icon");
export const CircleHelpIcon = createIcon("glyphs-poly:question-circle", "circle-help-icon");
export const CirclePlusIcon = createIcon("glyphs-poly:plus-circle", "circle-plus-icon");
export const CircleXIcon = createIcon("glyphs-poly:x-circle", "circle-x-icon");
export const CircleIcon = createIcon("glyphs-poly:circle", "circle-icon");
export const ClipboardCheckIcon = createIcon("glyphs-poly:note-clipboard", "clipboard-check-icon");
export const ClipboardIcon = createIcon("glyphs-poly:clipboard", "clipboard-icon");
export const ClockIcon = createIcon("glyphs-poly:clock", "clock-icon");
export const CodeIcon = createIcon("glyphs-poly:code", "code-icon");
export const Columns3Icon = createIcon("glyphs-poly:columns-3", "columns-3-icon");
export const CommandIcon = createIcon("glyphs-poly:cli", "command-icon");
export const ContactIcon = createIcon("glyphs-poly:handshake", "contact-icon");
export const CopyIcon = createIcon("glyphs-poly:copy", "copy-icon");
export const CornerDownLeftIcon = createIcon("glyphs-poly:corner-down-left", "corner-down-left-icon");
export const CornerDownRightIcon = createIcon("glyphs-poly:corner-down-right", "corner-down-right-icon");
export const CreditCardIcon = createIcon("glyphs-poly:credit-card", "credit-card-icon");
export const DiscIcon = createIcon("glyphs-poly:disc", "disc-icon");
export const DotIcon = createIcon("glyphs-poly:dot", "dot-icon");
export const DownloadIcon = createIcon("glyphs-poly:download", "download-icon");
export const EllipsisVerticalIcon = createIcon("glyphs-poly:ellipsis-vertical", "ellipsis-vertical-icon");
export const EllipsisIcon = createIcon("glyphs-poly:ellipsis", "ellipsis-icon");
export const ExternalLinkIcon = createIcon("streamline-plump-color:share-link-flat", "external-link-icon");
export const EyeOffIcon = createIcon("glyphs-poly:eye-1-slash", "eye-off-icon");
export const EyeIcon = createIcon("glyphs-poly:eye", "eye-icon");
export const FileDownIcon = createIcon("glyphs-poly:file-download", "file-down-icon");
export const FileTextIcon = createIcon("glyphs-poly:note", "file-text-icon");
export const FileIcon = createIcon("glyphs-poly:file", "file");
export const FilterIcon = createIcon("glyphs-poly:filter", "filter-icon");
export const FingerprintIcon = createIcon("glyphs-poly:fingerprint", "fingerprint-icon");
export const FlagIcon = createIcon("glyphs-poly:flag", "flag-icon");
export const FolderIcon = createIcon("glyphs-poly:folder", "folder-icon");
export const GiftIcon = createIcon("glyphs-poly:gift", "gift-icon");
export const GitMergeIcon = createIcon("glyphs-poly:git-merge", "git-merge-icon");
export const GlobeIcon = createIcon("glyphs-poly:globe", "globe-icon");
export const Grid3x3Icon = createIcon("glyphs-poly:grid", "grid-3x3-icon");
export const GridListIcon = createIcon("glyphs-poly:grid-list", "grid-list-icon");
export const HandshakeIcon = createIcon("glyphs-poly:handshake", "handshake-icon");
export const InfoIcon = createIcon("glyphs-poly:info-circle", "info-icon");
export const ItalicIcon = createIcon("glyphs-poly:italic", "italic-icon");
export const KeyIcon = createIcon("glyphs-poly:key", "key-icon");
export const LayersIcon = createIcon("glyphs-poly:layer-group", "layers-icon");
export const LayoutDashboardIcon = createIcon("glyphs-poly:layout-2", "layout-dashboard-icon");
export const Link2Icon = createIcon("glyphs-poly:link-1", "link-2-icon");
export const LinkIcon = createIcon("glyphs-poly:link", "link-icon");
export const ListFilterIcon = createIcon("glyphs-poly:filter", "list-filter-icon");
export const LoaderIcon = createIcon("glyphs-poly:loader", "loader-icon");
export const LockOpenIcon = createIcon("glyphs-poly:lock-open", "lock-open-icon");
export const LockIcon = createIcon("glyphs-poly:lock", "lock-icon");
export const LogOutIcon = createIcon("glyphs-poly:door-open", "log-out-icon");
export const MailOpenIcon = createIcon("glyphs-poly:envelope-open", "mail-open-icon");
export const MailIcon = createIcon("glyphs-poly:envelope", "mail-icon");
export const MapPinIcon = createIcon("glyphs-poly:map-marker-1", "map-pin-icon");
export const MapIcon = createIcon("glyphs-poly:map", "map-icon");
export const MenuIcon = createIcon("glyphs-poly:menu", "menu-icon");
export const MessageCircleIcon = createIcon("glyphs-poly:comment-1", "message-circle-icon");
export const MessagesSquareIcon = createIcon("glyphs-poly:comment-2", "messages-square-icon");
export const MicOffIcon = createIcon("glyphs-poly:microphone-slash", "mic-off-icon");
export const MicIcon = createIcon("glyphs-poly:microphone", "mic-icon");
export const MonitorIcon = createIcon("glyphs-poly:monitor", "monitor-icon");
export const BeachIcon = createIcon("custom:beach", "beach-icon");
export const PaintbrushIcon = createIcon("glyphs-poly:pencil-paintbrush", "paintbrush-icon");
export const PaperclipIcon = createIcon("glyphs-poly:paperclip", "paperclip-icon");
export const PauseIcon = createIcon("glyphs-poly:pause", "pause-icon");
export const PencilIcon = createIcon("glyphs-poly:edit", "pencil-icon");
export const PhoneCallIcon = createIcon("glyphs-poly:phone-call", "phone-call-icon");
export const PhoneIncomingIcon = createIcon("glyphs-poly:phone-incoming", "phone-incoming-icon");
export const PhoneOffIcon = createIcon("glyphs-poly:phone-remove", "phone-off-icon");
export const PhoneOutgoingIcon = createIcon("glyphs-poly:phone-outgoing", "phone-outgoing-icon");
export const PhoneIcon = createIcon("glyphs-poly:phone", "phone-icon");
export const PlayIcon = createIcon("glyphs-poly:play", "play-icon");
export const PlusIcon = createIcon("glyphs-poly:plus", "plus-icon");
export const RefreshCcwIcon = createIcon("glyphs-poly:arrows-round", "refresh-ccw-icon");
export const RefreshCwIcon = createIcon("glyphs-poly:arrow-round", "refresh-cw-icon");
export const RepeatIcon = createIcon("glyphs-poly:repeat", "repeat-icon");
export const RocketIcon = createIcon("glyphs-poly:rocket", "rocket-icon");
export const RotateCcwIcon = createIcon("glyphs-poly:rotate-ccw", "rotate-ccw-icon");
export const RotateCwIcon = createIcon("glyphs-poly:rotate-cw", "rotate-cw-icon");
export const SearchIcon = createIcon("glyphs-poly:search", "search-icon");
export const SendIcon = createIcon("glyphs-poly:send", "send-icon");
export const SettingsIcon = createIcon("glyphs-poly:cog", "settings-icon");
export const Share2Icon = createIcon("glyphs-poly:share", "share-2-icon");
export const ShieldCheckIcon = createIcon("glyphs-poly:shield-check", "shield-check-icon");
export const ShieldIcon = createIcon("glyphs-poly:shield", "shield-icon");
export const ShuffleIcon = createIcon("glyphs-poly:shuffle", "shuffle-icon");
export const SlidersHorizontalIcon = createIcon("glyphs-poly:sliders", "sliders-horizontal-icon");
export const SlidersVerticalIcon = createIcon("glyphs-poly:sliders-vertical", "sliders-vertical-icon");
export const SmartphoneIcon = createIcon("glyphs-poly:mobile", "smartphone-icon");
export const SparklesIcon = createIcon("glyphs-poly:sparkles", "sparkles-icon");
export const SplitIcon = createIcon("glyphs-poly:arrows-split", "split-icon");
export const SquareCheckIcon = createIcon("glyphs-poly:check-square", "square-check-icon");
export const SquarePenIcon = createIcon("glyphs-poly:square-pen", "square-pen-icon");
export const StarIcon = createIcon("glyphs-poly:star", "star-icon");
export const SunIcon = createIcon("glyphs-poly:sun", "sun-icon");
export const SunriseIcon = createIcon("glyphs-poly:sunrise", "sunrise-icon");
export const SunsetIcon = createIcon("glyphs-poly:sunset", "sunset-icon");
export const TagsIcon = createIcon("glyphs-poly:tags", "tags-icon");
export const TerminalIcon = createIcon("glyphs-poly:terminal", "terminal-icon");
export const Trash2Icon = createIcon("glyphs-poly:trash", "trash-2-icon");
export const TrashIcon = createIcon("glyphs-poly:trash", "trash-icon");
export const TriangleAlertIcon = createIcon("glyphs-poly:exclamation-triangle", "triangle-alert-icon");
export const UploadIcon = createIcon("glyphs-poly:upload", "upload-icon");
export const UserCheckIcon = createIcon("glyphs-poly:user-check", "user-check-icon");
export const UserPlusIcon = createIcon("glyphs-poly:user-plus", "user-plus-icon");
export const UserXIcon = createIcon("glyphs-poly:user-x", "user-x-icon");
export const UserIcon = createIcon("glyphs-poly:user", "user-icon");
export const UsersIcon = createIcon("glyphs-poly:users", "users-icon");
export const VenetianMaskIcon = createIcon("glyphs-poly:mask", "venetian-mask-icon");
export const VideoIcon = createIcon("glyphs-poly:video", "video-icon");
export const WaypointsIcon = createIcon("glyphs-poly:waypoints", "waypoints-icon");
export const WebhookIcon = createIcon("glyphs-poly:webhook", "webhook-icon");
export const XIcon = createIcon("glyphs-poly:x", "x-icon");
export const ZapIcon = createIcon("glyphs-poly:zap", "zap-icon");

// Custom Icons - Add your brand icons here
// See custom-icons.ts to add more icons to the collection
//export const BrandIcon = createIcon("custom:brand", "brand-icon");
