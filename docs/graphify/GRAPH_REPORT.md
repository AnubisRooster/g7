# Graph Report - g7  (2026-09-06)

## Corpus Check
- Corpus is ~29,868 words - fits in a single context window. You may not need a graph.

## Summary
- 614 nodes · 1111 edges · 44 communities (36 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- dependencies
- app/page.tsx
- package.json
- sidebar.tsx
- use-toast.ts
- alert-dialog.tsx
- command.tsx
- compilerOptions
- components.json
- menubar.tsx
- cn()
- context-menu.tsx
- dropdown-menu.tsx
- form.tsx
- toggle-group.tsx
- carousel.tsx
- devDependencies
- sheet.tsx
- chart.tsx
- drawer.tsx
- navigation-menu.tsx
- scripts
- server.ts
- seed.ts
- react
- eslint.config.mjs
- utils.ts
- input-otp.tsx
- accordion.tsx
- popover.tsx
- generate-questions/route.ts
- useSidebar()
- avatar.tsx
- collapsible.tsx
- hover-card.tsx
- resizable.tsx
- sonner.tsx
- radio-group.tsx
- tailwind.config.ts
- setup-windows.ps1
- @radix-ui/react-aspect-ratio
- graphify_pipeline.py
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
9. `tailwind` - 6 edges
10. `aliases` - 6 edges

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

## Communities (44 total, 7 thin omitted)

### Community 0 - "dependencies"
Cohesion: 0.03
Nodes (71): dependencies, axios, class-variance-authority, clsx, cmdk, date-fns, @dnd-kit/core, @dnd-kit/sortable (+63 more)

### Community 1 - "app/page.tsx"
Cohesion: 0.06
Nodes (40): Message, lucide-react, @radix-ui/react-progress, @radix-ui/react-scroll-area, @radix-ui/react-select, @radix-ui/react-slot, @radix-ui/react-tabs, socket.io-client (+32 more)

### Community 2 - "package.json"
Cohesion: 0.06
Nodes (35): name, private, version, axios, date-fns, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities (+27 more)

### Community 3 - "sidebar.tsx"
Cohesion: 0.07
Nodes (30): @radix-ui/react-tooltip, Input(), Separator(), SidebarContent(), SidebarContext, SidebarContextProps, SidebarFooter(), SidebarGroup() (+22 more)

### Community 4 - "use-toast.ts"
Cohesion: 0.09
Nodes (28): @radix-ui/react-toast, geistMono, geistSans, metadata, Toast, ToastAction, ToastActionElement, ToastClose (+20 more)

### Community 5 - "alert-dialog.tsx"
Cohesion: 0.10
Nodes (21): @radix-ui/react-alert-dialog, react-day-picker, AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader() (+13 more)

### Community 6 - "command.tsx"
Cohesion: 0.11
Nodes (16): cmdk, Command(), CommandDialog(), CommandGroup(), CommandInput(), CommandItem(), CommandList(), CommandSeparator() (+8 more)

### Community 7 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 8 - "components.json"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 9 - "menubar.tsx"
Cohesion: 0.11
Nodes (12): @radix-ui/react-menubar, Menubar(), MenubarCheckboxItem(), MenubarContent(), MenubarItem(), MenubarLabel(), MenubarRadioItem(), MenubarSeparator() (+4 more)

### Community 10 - "cn()"
Cohesion: 0.20
Nodes (15): BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage(), BreadcrumbSeparator(), Table(), TableBody() (+7 more)

### Community 11 - "context-menu.tsx"
Cohesion: 0.12
Nodes (10): @radix-ui/react-context-menu, ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut() (+2 more)

### Community 12 - "dropdown-menu.tsx"
Cohesion: 0.12
Nodes (10): @radix-ui/react-dropdown-menu, DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut() (+2 more)

### Community 13 - "form.tsx"
Cohesion: 0.17
Nodes (13): @radix-ui/react-label, react-hook-form, FormControl(), FormDescription(), FormFieldContext, FormFieldContextValue, FormItem(), FormItemContext (+5 more)

### Community 14 - "toggle-group.tsx"
Cohesion: 0.18
Nodes (12): class-variance-authority, @radix-ui/react-toggle, @radix-ui/react-toggle-group, Alert(), AlertDescription(), AlertTitle(), alertVariants, ToggleGroup() (+4 more)

### Community 15 - "carousel.tsx"
Cohesion: 0.17
Nodes (14): embla-carousel-react, Carousel(), CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext() (+6 more)

### Community 16 - "devDependencies"
Cohesion: 0.17
Nodes (12): devDependencies, eslint, eslint-config-next, @eslint/eslintrc, nodemon, tailwindcss, @tailwindcss/postcss, tw-animate-css (+4 more)

### Community 17 - "sheet.tsx"
Cohesion: 0.17
Nodes (8): @radix-ui/react-dialog, Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetTitle()

### Community 18 - "chart.tsx"
Cohesion: 0.23
Nodes (10): recharts, ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartTooltipContent(), getPayloadConfigFromPayload() (+2 more)

### Community 19 - "drawer.tsx"
Cohesion: 0.17
Nodes (7): vaul, DrawerContent(), DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay(), DrawerTitle()

### Community 20 - "navigation-menu.tsx"
Cohesion: 0.20
Nodes (10): @radix-ui/react-navigation-menu, NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuTrigger() (+2 more)

### Community 21 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:generate, db:migrate, db:push, db:reset, db:seed, dev (+2 more)

### Community 22 - "server.ts"
Cohesion: 0.36
Nodes (5): nextConfig, next, socket.io, createCustomServer(), setupSocket()

### Community 23 - "seed.ts"
Cohesion: 0.29
Nodes (4): prisma, @prisma/client, db, globalForPrisma

### Community 24 - "react"
Cohesion: 0.29
Nodes (5): @radix-ui/react-slider, @radix-ui/react-switch, react, Slider(), Switch()

### Community 25 - "eslint.config.mjs"
Cohesion: 0.33
Nodes (5): compat, __dirname, eslintConfig, __filename, @eslint/eslintrc

### Community 26 - "utils.ts"
Cohesion: 0.33
Nodes (4): clsx, @radix-ui/react-checkbox, tailwind-merge, Checkbox()

### Community 27 - "input-otp.tsx"
Cohesion: 0.33
Nodes (4): input-otp, InputOTP(), InputOTPGroup(), InputOTPSlot()

### Community 28 - "accordion.tsx"
Cohesion: 0.33
Nodes (4): @radix-ui/react-accordion, AccordionContent(), AccordionItem(), AccordionTrigger()

### Community 30 - "generate-questions/route.ts"
Cohesion: 0.53
Nodes (5): z-ai-web-dev-sdk, buildAIPrompt(), extractQuestionsFromText(), parseGeneratedQuestions(), POST()

### Community 31 - "useSidebar()"
Cohesion: 0.33
Nodes (6): Sidebar(), SidebarMenuButton(), sidebarMenuButtonVariants, SidebarRail(), SidebarTrigger(), useSidebar()

### Community 32 - "avatar.tsx"
Cohesion: 0.40
Nodes (4): @radix-ui/react-avatar, Avatar(), AvatarFallback(), AvatarImage()

### Community 35 - "resizable.tsx"
Cohesion: 0.40
Nodes (3): react-resizable-panels, ResizableHandle(), ResizablePanelGroup()

### Community 37 - "radio-group.tsx"
Cohesion: 0.50
Nodes (3): @radix-ui/react-radio-group, RadioGroup(), RadioGroupItem()

### Community 38 - "tailwind.config.ts"
Cohesion: 0.50
Nodes (3): tailwindcss, tailwindcss-animate, config

### Community 39 - "setup-windows.ps1"
Cohesion: 0.83
Nodes (3): Install-Chocolatey(), Install-ChocoPackage(), Test-Command()

## Knowledge Gaps
- **204 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+199 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 263 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn()` to `app/page.tsx`, `sidebar.tsx`, `use-toast.ts`, `alert-dialog.tsx`, `command.tsx`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `form.tsx`, `toggle-group.tsx`, `carousel.tsx`, `sheet.tsx`, `chart.tsx`, `drawer.tsx`, `navigation-menu.tsx`, `react`, `utils.ts`, `input-otp.tsx`, `accordion.tsx`, `popover.tsx`, `useSidebar()`, `avatar.tsx`, `hover-card.tsx`, `resizable.tsx`, `radio-group.tsx`?**
  _High betweenness centrality (0.292) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.197) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `app/page.tsx`, `package.json`, `sidebar.tsx`, `use-toast.ts`, `alert-dialog.tsx`, `command.tsx`, `menubar.tsx`, `cn()`, `context-menu.tsx`, `dropdown-menu.tsx`, `form.tsx`, `toggle-group.tsx`, `carousel.tsx`, `sheet.tsx`, `chart.tsx`, `drawer.tsx`, `navigation-menu.tsx`, `utils.ts`, `input-otp.tsx`, `accordion.tsx`, `popover.tsx`, `avatar.tsx`, `hover-card.tsx`, `resizable.tsx`, `radio-group.tsx`?**
  _High betweenness centrality (0.186) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _204 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.028169014084507043 - nodes in this community are weakly interconnected._
- **Should `app/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06079664570230608 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._