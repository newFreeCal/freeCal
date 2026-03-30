#!/usr/bin/env python3
"""
Icon Verification Script for glyphs-poly collection
Checks icons from packages/coss-ui/src/icons.tsx against Iconify API
"""

import requests
from collections import defaultdict

# Extracted icons from icons.tsx
ICONS_DATA = [
    ("ActivityIcon", "glyphs-poly:activity"),
    ("ArrowDownIcon", "glyphs-poly:arrow-down"),
    ("ArrowLeftIcon", "glyphs-poly:arrow-left"),
    ("ArrowRightIcon", "glyphs-poly:arrow-right"),
    ("ArrowUpRightIcon", "glyphs-poly:arrow-up-right"),
    ("ArrowUpIcon", "glyphs-poly:arrow-up"),
    ("AsteriskIcon", "glyphs-poly:asterisk"),
    ("AtSignIcon", "glyphs-poly:at-sign"),
    ("AtomIcon", "glyphs-poly:atom"),
    ("BadgeCheckIcon", "glyphs-poly:badge-check"),
    ("BanIcon", "glyphs-poly:ban"),
    ("BellIcon", "glyphs-poly:bell"),
    ("BinaryIcon", "glyphs-poly:binary"),
    ("BlocksIcon", "glyphs-poly:blocks"),
    ("BoldIcon", "glyphs-poly:bold"),
    ("BookOpenCheckIcon", "glyphs-poly:book-open-check"),
    ("BookOpenIcon", "glyphs-poly:book-open"),
    ("BookUserIcon", "glyphs-poly:book-user"),
    ("BookIcon", "glyphs-poly:book"),
    ("BookmarkIcon", "glyphs-poly:bookmark"),
    ("BuildingIcon", "glyphs-poly:building"),
    ("CalendarCheck2Icon", "glyphs-poly:calendar-check"),
    ("CalendarDaysIcon", "glyphs-poly:calendar"),
    ("CalendarHeartIcon", "glyphs-poly:calendar-heart"),
    ("CalendarRangeIcon", "glyphs-poly:calendar-range"),
    ("CalendarSearchIcon", "glyphs-poly:calendar-search"),
    ("CalendarX2Icon", "glyphs-poly:calendar-x"),
    ("CalendarIcon", "glyphs-poly:calendar"),
    ("ChartBarIcon", "glyphs-poly:chart-bar"),
    ("ChartLineIcon", "glyphs-poly:chart-line"),
    ("CheckCheckIcon", "glyphs-poly:check-check"),
    ("CheckIcon", "glyphs-poly:check"),
    ("ChevronDownIcon", "glyphs-poly:chevron-down"),
    ("ChevronLeftIcon", "glyphs-poly:chevron-left"),
    ("ChevronRightIcon", "glyphs-poly:chevron-right"),
    ("ChevronUpIcon", "glyphs-poly:chevron-up"),
    ("ChevronsDownUpIcon", "glyphs-poly:chevrons-down-up"),
    ("ChevronsLeftIcon", "glyphs-poly:chevrons-left"),
    ("ChevronsRightIcon", "glyphs-poly:chevrons-right"),
    ("ChevronsUpDownIcon", "glyphs-poly:chevrons-up-down"),
    ("CircleAlertIcon", "glyphs-poly:alert-circle"),
    ("CircleArrowUpIcon", "glyphs-poly:arrow-up-circle"),
    ("CircleCheckBigIcon", "glyphs-poly:check-circle-big"),
    ("CircleCheckIcon", "glyphs-poly:check-circle"),
    ("CircleHelpIcon", "glyphs-poly:question-circle"),
    ("CirclePlusIcon", "glyphs-poly:plus-circle"),
    ("CircleXIcon", "glyphs-poly:x-circle"),
    ("CircleIcon", "glyphs-poly:circle"),
    ("ClipboardCheckIcon", "glyphs-poly:clipboard-check"),
    ("ClipboardIcon", "glyphs-poly:clipboard"),
    ("ClockIcon", "glyphs-poly:clock"),
    ("CodeIcon", "glyphs-poly:code"),
    ("Columns3x3Icon", "glyphs-poly:columns"),
    ("CommandIcon", "glyphs-poly:command"),
    ("ContactIcon", "glyphs-poly:contact"),
    ("CopyIcon", "glyphs-poly:copy"),
    ("CornerDownLeftIcon", "glyphs-poly:corner-down-left"),
    ("CornerDownRightIcon", "glyphs-poly:corner-down-right"),
    ("CreditCardIcon", "glyphs-poly:credit-card"),
    ("DiscIcon", "glyphs-poly:disc"),
    ("DotIcon", "glyphs-poly:dot"),
    ("DownloadIcon", "glyphs-poly:download"),
    ("EllipsisVerticalIcon", "glyphs-poly:ellipsis-vertical"),
    ("EllipsisIcon", "glyphs-poly:ellipsis"),
    ("ExternalLinkIcon", "glyphs-poly:external-link"),
    ("EyeOffIcon", "glyphs-poly:eye-off"),
    ("EyeIcon", "glyphs-poly:eye"),
    ("FileDownIcon", "glyphs-poly:file-download"),
    ("FileTextIcon", "glyphs-poly:file-text"),
    ("FileIcon", "glyphs-poly:file"),
    ("FilterIcon", "glyphs-poly:filter"),
    ("FingerprintIcon", "glyphs-poly:fingerprint"),
    ("FlagIcon", "glyphs-poly:flag"),
    ("FolderIcon", "glyphs-poly:folder"),
    ("GiftIcon", "glyphs-poly:gift"),
    ("GitMergeIcon", "glyphs-poly:git-merge"),
    ("GlobeIcon", "glyphs-poly:globe"),
    ("Grid3x3Icon", "glyphs-poly:grid"),
    ("HandshakeIcon", "glyphs-poly:handshake"),
    ("InfoIcon", "glyphs-poly:info"),
    ("ItalicIcon", "glyphs-poly:italic"),
    ("KeyIcon", "glyphs-poly:key"),
    ("LayersIcon", "glyphs-poly:layers"),
    ("LayoutDashboardIcon", "glyphs-poly:dashboard"),
    ("Link2Icon", "glyphs-poly:link-2"),
    ("LinkIcon", "glyphs-poly:link"),
    ("ListFilterIcon", "glyphs-poly:filter"),
    ("LoaderIcon", "glyphs-poly:loader"),
    ("LockOpenIcon", "glyphs-poly:lock-open"),
    ("LockIcon", "glyphs-poly:lock"),
    ("LogOutIcon", "glyphs-poly:door-open"),
    ("MailOpenIcon", "glyphs-poly:mail-open"),
    ("MailIcon", "glyphs-poly:mail"),
    ("MapPinIcon", "glyphs-poly:map-pin"),
    ("MapIcon", "glyphs-poly:map"),
    ("MenuIcon", "glyphs-poly:menu"),
    ("MessageCircleIcon", "glyphs-poly:message-circle"),
    ("MessagesSquareIcon", "glyphs-poly:message-square"),
    ("MicOffIcon", "glyphs-poly:microphone-off"),
    ("MicIcon", "glyphs-poly:microphone"),
    ("MonitorIcon", "glyphs-poly:monitor"),
    ("MoonIcon", "custom:beach"),
    ("PaintbrushIcon", "glyphs-poly:paintbrush"),
    ("PaperclipIcon", "glyphs-poly:paperclip"),
    ("PauseIcon", "glyphs-poly:pause"),
    ("PencilIcon", "glyphs-poly:edit"),
    ("PhoneCallIcon", "glyphs-poly:phone-call"),
    ("PhoneIncomingIcon", "glyphs-poly:phone-incoming"),
    ("PhoneOffIcon", "glyphs-poly:phone-off"),
    ("PhoneOutgoingIcon", "glyphs-poly:phone-outgoing"),
    ("PhoneIcon", "glyphs-poly:phone"),
    ("PlayIcon", "glyphs-poly:play"),
    ("PlusIcon", "glyphs-poly:plus"),
    ("RefreshCcwIcon", "glyphs-poly:refresh-ccw"),
    ("RefreshCwIcon", "glyphs-poly:refresh"),
    ("RepeatIcon", "glyphs-poly:repeat"),
    ("RocketIcon", "glyphs-poly:rocket"),
    ("RotateCcwIcon", "glyphs-poly:rotate-ccw"),
    ("RotateCwIcon", "glyphs-poly:rotate-cw"),
    ("SearchIcon", "glyphs-poly:search"),
    ("SendIcon", "glyphs-poly:send"),
    ("SettingsIcon", "glyphs-poly:cog"),
    ("Share2Icon", "glyphs-poly:share"),
    ("ShieldCheckIcon", "glyphs-poly:shield-check"),
    ("ShieldIcon", "glyphs-poly:shield"),
    ("ShuffleIcon", "glyphs-poly:shuffle"),
    ("SlidersHorizontalIcon", "glyphs-poly:sliders"),
    ("SlidersVerticalIcon", "glyphs-poly:sliders-vertical"),
    ("SmartphoneIcon", "glyphs-poly:smartphone"),
    ("SparklesIcon", "glyphs-poly:sparkles"),
    ("SplitIcon", "glyphs-poly:arrows-split"),
    ("SquareCheckIcon", "glyphs-poly:checkbox"),
    ("SquarePenIcon", "glyphs-poly:square-pen"),
    ("StarIcon", "glyphs-poly:star"),
    ("SunIcon", "glyphs-poly:sun"),
    ("SunriseIcon", "glyphs-poly:sunrise"),
    ("SunsetIcon", "glyphs-poly:sunset"),
    ("TagsIcon", "glyphs-poly:tags"),
    ("TerminalIcon", "glyphs-poly:terminal"),
    ("Trash2Icon", "glyphs-poly:delete"),
    ("TrashIcon", "glyphs-poly:trash"),
    ("TriangleAlertIcon", "glyphs-poly:alert-triangle"),
    ("UploadIcon", "glyphs-poly:upload"),
    ("UserCheckIcon", "glyphs-poly:user-check"),
    ("UserPlusIcon", "glyphs-poly:user-plus"),
    ("UserXIcon", "glyphs-poly:user-x"),
    ("UserIcon", "glyphs-poly:user"),
    ("UsersIcon", "glyphs-poly:users"),
    ("VenetianMaskIcon", "glyphs-poly:mask"),
    ("VideoIcon", "glyphs-poly:video"),
    ("WaypointsIcon", "glyphs-poly:waypoints"),
    ("WebhookIcon", "glyphs-poly:webhook"),
    ("XIcon", "glyphs-poly:x"),
    ("ZapIcon", "glyphs-poly:zap"),
    ("BrandIcon", "custom:brand"),
]

# Known aliases (component name → actual icon used)
KNOWN_ALIASES = {
    "SettingsIcon": ("cog", "settings"),
    "LogOutIcon": ("door-open", "log-out"),
    "PencilIcon": ("edit", "pencil"),
    "Trash2Icon": ("delete", "trash-2"),
    "LayoutDashboardIcon": ("dashboard", "layout-dashboard"),
    "CircleAlertIcon": ("alert-circle", "circle-alert"),
    "CircleHelpIcon": ("question-circle", "circle-help"),
    "TriangleAlertIcon": ("alert-triangle", "triangle-alert"),
    "CircleCheckBigIcon": ("check-circle-big", "circle-check-big"),
    "CircleArrowUpIcon": ("arrow-up-circle", "circle-arrow-up"),
    "CirclePlusIcon": ("plus-circle", "circle-plus"),
    "CircleXIcon": ("x-circle", "circle-x"),
    "Columns3x3Icon": ("columns", "columns-3"),
    "Grid3x3Icon": ("grid", "grid-3x3"),
    "Link2Icon": ("link-2", "link"),
    "ListFilterIcon": ("filter", "list-filter"),
    "MailOpenIcon": ("mail-open", "mail-open"),
    "MessagesSquareIcon": ("message-square", "messages-square"),
    "MicOffIcon": ("microphone-off", "mic-off"),
    "MicIcon": ("microphone", "mic"),
    "RefreshCcwIcon": ("refresh-ccw", "rotate-ccw"),
    "RefreshCwIcon": ("refresh", "rotate-cw"),
    "RotateCcwIcon": ("rotate-ccw", "rotate-ccw"),
    "RotateCwIcon": ("rotate-cw", "rotate-cw"),
    "Share2Icon": ("share", "share-2"),
    "SlidersHorizontalIcon": ("sliders", "sliders-horizontal"),
    "SlidersVerticalIcon": ("sliders-vertical", "sliders-vertical"),
    "SquareCheckIcon": ("checkbox", "check-square"),
    "SquarePenIcon": ("square-pen", "square-pen"),
    "Trash2Icon": ("delete", "trash-2"),
    "UserCheckIcon": ("user-check", "user-check"),
    "UserPlusIcon": ("user-plus", "user-plus"),
    "UserXIcon": ("user-x", "user-x"),
    "VenetianMaskIcon": ("mask", "venetian-mask"),
    "WaypointsIcon": ("waypoints", "waypoints"),
    "FileDownIcon": ("file-download", "download"),
    "CalendarCheck2Icon": ("calendar-check", "calendar-check-2"),
    "CalendarX2Icon": ("calendar-x", "calendar-x-2"),
}


def verify_icons():
    # Separate icons by collection
    external_icons = []
    glyphs_poly_icons = []

    for component, icon_full in ICONS_DATA:
        if icon_full.startswith("glyphs-poly:"):
            icon_name = icon_full.replace("glyphs-poly:", "")
            glyphs_poly_icons.append((component, icon_name, icon_full))
        else:
            external_icons.append((component, icon_full))

    # Get unique glyphs-poly icon names for API check
    unique_icon_names = list(set(icon[1] for icon in glyphs_poly_icons))

    # Check against Iconify API in batches
    valid_icons = set()
    invalid_icons = set()

    # Process in batches of 50 (API limit)
    batch_size = 50
    for i in range(0, len(unique_icon_names), batch_size):
        batch = unique_icon_names[i:i + batch_size]
        icons_str = ",".join(batch)

        try:
            url = f"https://api.iconify.design/glyphs-poly.json?icons={icons_str}"
            response = requests.get(url, timeout=10)
            response.raise_for_status()
            data = response.json()

            # Icons that exist have their data in 'icons', missing ones are in 'not_found'
            icons_data = data.get("icons", {})
            not_found = data.get("not_found", [])

            for icon_name in batch:
                if icon_name in icons_data:
                    valid_icons.add(icon_name)
                elif icon_name in not_found or icon_name not in icons_data:
                    invalid_icons.add(icon_name)
        except requests.RequestException as e:
            print(f"Error fetching batch {i // batch_size + 1}: {e}")
            # Assume invalid if we can't check
            for icon_name in batch:
                invalid_icons.add(icon_name)

    # Categorize results
    valid_results = []
    invalid_results = []
    suspicious_results = []

    for component, icon_name, icon_full in glyphs_poly_icons:
        if icon_name in valid_icons:
            # Check for known aliases (these are intentional)
            is_known_alias = False
            if component in KNOWN_ALIASES:
                actual_icon, suggested_name = KNOWN_ALIASES[component]
                if actual_icon == icon_name and actual_icon != suggested_name:
                    is_known_alias = True
                    suspicious_results.append((component, icon_full,
                                               f"Uses '{icon_name}' instead of '{suggested_name}' (intentional alias)"))

            if not is_known_alias:
                # Check for name mismatch
                component_base = component.replace("Icon", "").lower().replace("-", "")
                icon_base = icon_name.replace("-", "")

                # Common acceptable mismatches
                acceptable_mismatches = {
                    ("calendardays", "calendar"),
                    ("circlecheck", "checkcircle"),
                    ("mic", "microphone"),
                    ("split", "arrowssplit"),
                }

                if (component_base, icon_base) not in acceptable_mismatches and component_base != icon_base:
                    suspicious_results.append((component, icon_full,
                                               "Name mismatch - component name differs from icon name"))
                else:
                    valid_results.append((component, icon_full))
            else:
                valid_results.append((component, icon_full))
        else:
            invalid_results.append((component, icon_full))

    # Find duplicates
    icon_usage = defaultdict(list)
    for component, icon_full in ICONS_DATA:
        icon_usage[icon_full].append(component)

    duplicates = {icon: comps for icon, comps in icon_usage.items() if len(comps) > 1}

    # Generate report
    print("=" * 80)
    print("## 📋 EXTRACTED ICONS")
    print("=" * 80)
    print(f"Total found: {len(ICONS_DATA)}\n")

    for component, icon_full in ICONS_DATA:
        prefix = "⚠️ external" if not icon_full.startswith("glyphs-poly:") else ""
        print(f"- {component} → {icon_full} {prefix}".strip())

    print("\n" + "=" * 80)
    print("## ✅ VALID (exist in glyphs-poly)")
    print("=" * 80)
    print(f"Count: {len(valid_results)}\n")
    for component, icon_full in sorted(valid_results, key=lambda x: x[1]):
        print(f"- {icon_full} ({component})")

    print("\n" + "=" * 80)
    print("## ❌ INVALID (NOT found in glyphs-poly)")
    print("=" * 80)
    print(f"Count: {len(invalid_results)}\n")
    if invalid_results:
        for component, icon_full in sorted(invalid_results, key=lambda x: x[1]):
            icon_name = icon_full.replace("glyphs-poly:", "")
            suggestion = suggest_icon_name(icon_name)
            print(f"- {icon_full} ({component})")
            if suggestion:
                print(f"  → Suggested: glyphs-poly:{suggestion} (may also not exist)")
    else:
        print("None found!")

    print("\n" + "=" * 80)
    print("## ⚠️ SUSPICIOUS MAPPINGS")
    print("=" * 80)
    print(f"Count: {len(suspicious_results)}\n")
    if suspicious_results:
        for component, icon_full, reason in sorted(suspicious_results, key=lambda x: x[0]):
            print(f"- {component} → {icon_full}")
            print(f"  Note: {reason}")
    else:
        print("None found!")

    print("\n" + "=" * 80)
    print("## 🔁 DUPLICATE INTERNAL ICONS")
    print("=" * 80)
    print(f"Count: {len(duplicates)}\n")
    if duplicates:
        for icon_full, components in sorted(duplicates.items()):
            print(f"- {icon_full} → used by: {', '.join(components)}")
    else:
        print("None found!")

    print("\n" + "=" * 80)
    print("## 📊 SUMMARY")
    print("=" * 80)
    print(f"- Total checked: {len(ICONS_DATA)}")
    print(f"- ✅ Valid: {len(valid_results)}")
    print(f"- ❌ Invalid: {len(invalid_results)}")
    print(f"- ⚠️ Suspicious: {len(suspicious_results)}")
    print(f"- 🔁 Duplicates: {len(duplicates)} icon(s) used multiple times")
    print(f"- 🌐 External collections: {len(external_icons)}")

    print("\n" + "=" * 80)
    print("## 💡 SUGGESTIONS")
    print("=" * 80)

    suggestions = []

    # External icons
    if external_icons:
        for component, icon_full in external_icons:
            if icon_full.startswith("custom:"):
                suggestions.append(f"- {component} uses '{icon_full}' - ensure custom icon is registered in custom-icons.ts")

    # Invalid icons - these need to be added to the glyphs-poly collection or use alternative
    if invalid_results:
        suggestions.append(f"\n⚠️ {len(invalid_results)} icons do NOT exist in the glyphs-poly collection!")
        suggestions.append("   These icons need to be either:")
        suggestions.append("   1. Added to the glyphs-poly collection")
        suggestions.append("   2. Replaced with existing icons from glyphs-poly")
        suggestions.append("   3. Changed to use a different Iconify collection (e.g., lucide, heroicons)")

    # Known aliases that are intentional
    suggestions.append("\n📝 Known intentional aliases (component name ≠ icon name):")
    suggestions.append("   - SettingsIcon → glyphs-poly:cog (instead of 'settings')")
    suggestions.append("   - LogOutIcon → glyphs-poly:door-open (instead of 'log-out')")
    suggestions.append("   - PencilIcon → glyphs-poly:edit (instead of 'pencil')")
    suggestions.append("   - Trash2Icon → glyphs-poly:delete (instead of 'trash-2')")

    # MoonIcon issue
    suggestions.append("\n🌙 MoonIcon uses 'custom:beach' - verify this is intentional!")

    if suggestions:
        for s in suggestions:
            print(s)

    print("\n" + "=" * 80)


def suggest_icon_name(icon_name):
    """Suggest possible correct icon names based on common patterns"""
    suggestions = {
        "cog": "settings",
        "door-open": "log-out",
        "edit": "pencil",
        "delete": "trash-2",
        "dashboard": "layout-dashboard",
        "alert-circle": "circle-alert",
        "question-circle": "circle-help",
        "alert-triangle": "triangle-alert",
        "check-circle-big": "circle-check-big",
        "arrow-up-circle": "circle-arrow-up",
        "plus-circle": "circle-plus",
        "x-circle": "circle-x",
        "file-download": "download",
        "calendar-check": "calendar-check-2",
        "calendar-x": "calendar-x-2",
        "refresh-ccw": "rotate-ccw",
        "refresh": "rotate-cw",
        "checkbox": "check-square",
        "link-2": "link",
        "columns": "columns-3",
        "grid": "grid-3x3",
        "mask": "venetian-mask",
        "share": "share-2",
        "sliders": "sliders-horizontal",
    }
    return suggestions.get(icon_name)


if __name__ == "__main__":
    verify_icons()
