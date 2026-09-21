# Graph Report - g7  (2026-09-21)

## Corpus Check
- 83 files · ~109,850 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 2, .bat 2, .db 1)

## Summary
- 631 nodes · 1131 edges · 34 communities (29 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- dependencies
- react
- utils.ts
- package.json
- sidebar.tsx
- alert-dialog.tsx
- use-toast.ts
- form.tsx
- layout.tsx
- command.tsx
- cn()
- compilerOptions
- components.json
- menubar.tsx
- context-menu.tsx
- dropdown-menu.tsx
- graphify_pipeline.py
- toggle-group.tsx
- carousel.tsx
- devDependencies
- sheet.tsx
- chart.tsx
- drawer.tsx
- scripts
- eslint.config.mjs
- seed.ts
- popover.tsx
- avatar.tsx
- collapsible.tsx
- sonner.tsx
- tailwind.config.ts
- setup-windows.ps1
- @radix-ui/react-aspect-ratio
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `cn()` - 232 edges
2. `react` - 49 edges
3. `lucide-react` - 22 edges
4. `compilerOptions` - 17 edges
5. `scripts` - 10 edges
6. `Button()` - 10 edges
7. `class-variance-authority` - 9 edges
8. `buttonVariants` - 9 edges
9. `next` - 7 edges
10. `tailwind` - 6 edges

## Surprising Connections (you probably didn't know these)
- `createCustomServer()` --calls--> `setupSocket()`  [EXTRACTED]
  server.ts → src/lib/socket.ts
- `AccordionItem()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/accordion.tsx → src/lib/utils.ts
- `AccordionTrigger()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/accordion.tsx → src/lib/utils.ts
- `AccordionContent()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/accordion.tsx → src/lib/utils.ts
- `AlertDialogOverlay()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (34 total, 5 thin omitted)

### Community 0 - "dependencies"
Cohesion: 0.03
Nodes (71): dependencies, axios, class-variance-authority, clsx, cmdk, date-fns, @dnd-kit/core, @dnd-kit/sortable (+63 more)

### Community 1 - "react"
Cohesion: 0.07
Nodes (39): Message, @radix-ui/react-scroll-area, @radix-ui/react-select, @radix-ui/react-tabs, react, categories, difficulties, experienceLevels (+31 more)

### Community 2 - "utils.ts"
Cohesion: 0.06
Nodes (25): clsx, input-otp, lucide-react, @radix-ui/react-accordion, @radix-ui/react-checkbox, @radix-ui/react-hover-card, @radix-ui/react-radio-group, @radix-ui/react-slider (+17 more)

### Community 3 - "package.json"
Cohesion: 0.05
Nodes (37): name, private, version, axios, date-fns, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities (+29 more)

### Community 4 - "sidebar.tsx"
Cohesion: 0.07
Nodes (34): @radix-ui/react-tooltip, Sidebar(), SidebarContent(), SidebarContext, SidebarContextProps, SidebarFooter(), SidebarGroup(), SidebarGroupAction() (+26 more)

### Community 5 - "alert-dialog.tsx"
Cohesion: 0.10
Nodes (21): @radix-ui/react-alert-dialog, react-day-picker, AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader() (+13 more)

### Community 6 - "use-toast.ts"
Cohesion: 0.11
Nodes (26): @radix-ui/react-toast, Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, src_components_ui_toast_toastprovider (+18 more)

### Community 7 - "form.tsx"
Cohesion: 0.10
Nodes (20): @radix-ui/react-label, @radix-ui/react-slot, react-hook-form, BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage() (+12 more)

### Community 8 - "layout.tsx"
Cohesion: 0.11
Nodes (15): nextConfig, ref_http, next, socket.io, z-ai-web-dev-sdk, createCustomServer(), buildAIPrompt(), extractQuestionsFromText() (+7 more)

### Community 9 - "command.tsx"
Cohesion: 0.11
Nodes (16): cmdk, Command(), CommandDialog(), CommandGroup(), CommandInput(), CommandItem(), CommandList(), CommandSeparator() (+8 more)

### Community 10 - "cn()"
Cohesion: 0.18
Nodes (19): @radix-ui/react-navigation-menu, NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuTrigger() (+11 more)

### Community 11 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 12 - "components.json"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 13 - "menubar.tsx"
Cohesion: 0.11
Nodes (12): @radix-ui/react-menubar, Menubar(), MenubarCheckboxItem(), MenubarContent(), MenubarItem(), MenubarLabel(), MenubarRadioItem(), MenubarSeparator() (+4 more)

### Community 14 - "context-menu.tsx"
Cohesion: 0.12
Nodes (10): @radix-ui/react-context-menu, ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut() (+2 more)

### Community 15 - "dropdown-menu.tsx"
Cohesion: 0.12
Nodes (10): @radix-ui/react-dropdown-menu, DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut() (+2 more)

### Community 16 - "graphify_pipeline.py"
Cohesion: 0.13
Nodes (13): graphify_analyze, graphify_build, graphify_cluster, graphify_detect, graphify_export, graphify_extract, graphify_llm, graphify_report (+5 more)

### Community 17 - "toggle-group.tsx"
Cohesion: 0.18
Nodes (12): class-variance-authority, @radix-ui/react-toggle, @radix-ui/react-toggle-group, Alert(), AlertDescription(), AlertTitle(), alertVariants, ToggleGroup() (+4 more)

### Community 18 - "carousel.tsx"
Cohesion: 0.17
Nodes (14): embla-carousel-react, Carousel(), CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext() (+6 more)

### Community 19 - "devDependencies"
Cohesion: 0.17
Nodes (12): devDependencies, eslint, eslint-config-next, @eslint/eslintrc, nodemon, tailwindcss, @tailwindcss/postcss, tw-animate-css (+4 more)

### Community 20 - "sheet.tsx"
Cohesion: 0.17
Nodes (8): @radix-ui/react-dialog, Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetTitle()

### Community 21 - "chart.tsx"
Cohesion: 0.23
Nodes (10): recharts, ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartTooltipContent(), getPayloadConfigFromPayload() (+2 more)

### Community 22 - "drawer.tsx"
Cohesion: 0.17
Nodes (7): vaul, DrawerContent(), DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay(), DrawerTitle()

### Community 23 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:generate, db:migrate, db:push, db:reset, db:seed, dev (+2 more)

### Community 24 - "eslint.config.mjs"
Cohesion: 0.25
Nodes (7): compat, __dirname, eslintConfig, __filename, @eslint/eslintrc, ref_path, ref_url

### Community 25 - "seed.ts"
Cohesion: 0.29
Nodes (4): prisma, @prisma/client, db, globalForPrisma

### Community 27 - "avatar.tsx"
Cohesion: 0.40
Nodes (4): @radix-ui/react-avatar, Avatar(), AvatarFallback(), AvatarImage()

### Community 30 - "tailwind.config.ts"
Cohesion: 0.50
Nodes (3): tailwindcss, tailwindcss-animate, config

### Community 31 - "setup-windows.ps1"
Cohesion: 0.83
Nodes (3): Install-Chocolatey(), Install-ChocoPackage(), Test-Command()

## Knowledge Gaps
- **204 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+199 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 279 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn()` to `react`, `utils.ts`, `sidebar.tsx`, `alert-dialog.tsx`, `use-toast.ts`, `form.tsx`, `command.tsx`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `toggle-group.tsx`, `carousel.tsx`, `sheet.tsx`, `chart.tsx`, `drawer.tsx`, `popover.tsx`, `avatar.tsx`?**
  _High betweenness centrality (0.286) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.189) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `utils.ts`, `package.json`, `sidebar.tsx`, `alert-dialog.tsx`, `use-toast.ts`, `form.tsx`, `command.tsx`, `cn()`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `toggle-group.tsx`, `carousel.tsx`, `sheet.tsx`, `chart.tsx`, `drawer.tsx`, `popover.tsx`, `avatar.tsx`?**
  _High betweenness centrality (0.175) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _204 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.028169014084507043 - nodes in this community are weakly interconnected._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.06936026936026936 - nodes in this community are weakly interconnected._
- **Should `utils.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05668016194331984 - nodes in this community are weakly interconnected._